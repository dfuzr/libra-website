import React, { useState } from 'react';
import { CommandNames, commandsList } from '../../libra-client-sdk-typescript/dist/cli/commands/command';
import GetAccount from './CommandsForms/GetAccount';
import GetTransaction from './CommandsForms/GetTransaction';
import GetTransactions from './CommandsForms/GetTransactions';
import GetMetadata from './CommandsForms/GetMetadata';
import GetCurrencies from './CommandsForms/GetCurrencies';
import GetAccountTransaction from './CommandsForms/GetAccountTransaction';
import GetEvents from './CommandsForms/GetEvents';
import Submit from './CommandsForms/Submit';
import AddressToBech32 from './CommandsForms/AddressToBech32';
import AddressFromBech32 from './CommandsForms/AddressFromBech32';

interface CommandsListProps {
  onCommandSelect: (command: string) => void;
}

function CommandsPreset({ onCommandSelect }: CommandsListProps) {
  const [selected, setSelected] = useState<CommandNames>();
  return (
    <>
      <div className="card m-4 border-0 shadow-sm">
        <ul className="list-group">
          {commandsList.map((commandName) => (
            <li key={commandName} className="list-group-item cursor-pointer">
              <span
                className={
                  'nav-link' + (commandName === selected ? ' active' : '')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setSelected(
                    selected === commandName ? undefined : commandName
                  );
                }}
              >
                {commandName}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {selected === 'get_account' && <GetAccount onSubmit={onCommandSelect} />}
      {selected === 'get_transactions' && (
        <GetTransactions onSubmit={onCommandSelect} />
      )}
      {selected === 'get_transaction' && (
        <GetTransaction onSubmit={onCommandSelect} />
      )}
      {selected === 'get_account_transaction' && (
        <GetAccountTransaction onSubmit={onCommandSelect} />
      )}
      {selected === 'get_currencies' && (
        <GetCurrencies onSubmit={onCommandSelect} />
      )}
      {selected === 'get_events' && <GetEvents onSubmit={onCommandSelect} />}
      {selected === 'get_metadata' && (
        <GetMetadata onSubmit={onCommandSelect} />
      )}
      {selected === 'submit' && <Submit onSubmit={onCommandSelect} />}
      {selected === 'address_to_bech32' && (
        <AddressToBech32 onSubmit={onCommandSelect} />
      )}
      {selected === 'address_from_bech32' && (
        <AddressFromBech32 onSubmit={onCommandSelect} />
      )}
    </>
  );
}

export default CommandsPreset;
