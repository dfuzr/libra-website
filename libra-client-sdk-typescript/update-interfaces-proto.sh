#!/usr/bin/env bash
echo "patching proto file for wrapper types"
if grep -q -i 'import "google/protobuf/wrappers.proto";' ./src/interfaces/libra-jsonrpc-types.proto; then
  #nothing needs to be done
  echo "no need to reimport google/protobuf/wrappers.proto"
else
  sed -i '/^syntax = "proto3";/a import "google/protobuf/wrappers.proto";' ./src/interfaces/libra-jsonrpc-types.proto
fi

optional_fields=(location abort_code function_index code_offset timestamp_usecs parent_vasp_address
                 compliance_key_rotation_events_key base_url_rotation_events_key received_mint_events_key
                 preburn_address new_to_lbr_exchange_rate currency_code epoch round
                 proposer proposed_time destination_address new_compliance_public_key
                 new_base_url time_rotated_seconds created_address role_id committed_timestamp_secs
                 sender signature_scheme signature public_key sequence_number chain_id max_gas_amount gas_unit_price
                 gas_currency expiration_timestamp_secs script_hash script_bytes)
echo "replacing string/uint64/uint32 with their respective google.protobuf wrapper"
for f in ${optional_fields[@]}; do
  echo -n "processing $f..."
  sed -i -e "s/string $f = /google.protobuf.StringValue $f = /g" ./src/interfaces/libra-jsonrpc-types.proto
  sed -i -e "s/uint64 $f = /google.protobuf.UInt64Value $f = /g" ./src/interfaces/libra-jsonrpc-types.proto
  sed -i -e "s/uint32 $f = /google.protobuf.Int32Value $f = /g" ./src/interfaces/libra-jsonrpc-types.proto
  sed -i -e "s/float $f = /google.protobuf.FloatValue $f = /g" ./src/interfaces/libra-jsonrpc-types.proto
  echo "done"
done
echo ""

echo -n "Using protoc to compile libra-jsonrpc-types... "
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
       --ts_proto_opt=outputEncodeMethods=false \
       --ts_proto_opt=snakeToCamel=false \
       --ts_proto_opt=useOptionals=true \
       --ts_proto_out=./src/interfaces \
       ./src/interfaces/libra-jsonrpc-types.proto
echo ""

cp ./src/interfaces/src/interfaces/libra-jsonrpc-types.ts ./src/interfaces/
rm -fr ./src/interfaces/src

cut_from_line=$(grep -n -m 1 "const base" ./src/interfaces/libra-jsonrpc-types.ts | sed  's/\([0-9]*\).*/\1/')
cut_from_line=$((cut_from_line-1))
echo "cutting from line $cut_from_line"
cat ./src/interfaces/libra-jsonrpc-types.ts | head -"$cut_from_line" > /tmp/libra-jsonrpc-types.ts
mv /tmp/libra-jsonrpc-types.ts ./src/interfaces/libra-jsonrpc-types.ts

echo "change number to BigInt when applicable"
bigint_fields=(amount sequence_number expiration_time transaction_version proposed_time time_rotated_seconds committed_timestamp_secs version timestamp gas_used timestamp_usecs max_gas_amount gas_unit_price expiration_timestamp_secs)
for f in ${bigint_fields[@]}; do
    echo "replacing $f: number with $f: BigInt"
    sed -i -e "s/$f: number;/$f: BigInt;/g" ./src/interfaces/libra-jsonrpc-types.ts
done

echo "change lists to optional when applicable"
list_fields=(preburn_balances new_to_lbr_exchange_rate)
for f in ${list_fields[@]}; do
    echo "replacing $f: <type> with $f?: <type>"
    sed -i -e "s/$f: \(.*\)\[\];/$f?: \1\[\];/g" ./src/interfaces/libra-jsonrpc-types.ts
done
