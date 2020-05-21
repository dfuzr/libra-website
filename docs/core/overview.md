---
id: overview
title: Libra Core Overview
sidebar_label: Core Contributors
---

Libra Core is the official name for the open-source implementation of the Libra protocol published by the Libra Association.

### Discover Core Contributor

<BucketsWrapper>
  <ColorBucket 
    color="purpleDark"
    icon="img/four-squares-temp.png"
    to="#"
    title="Send a test transaction"
  />
  <ColorBucket 
    color="purpleLight"
    icon="img/four-squares-temp.png"
    to="#"
    title="Run a client"
  />
  <ColorBucket 
    color="aqua"
    icon="img/four-squares-temp.png"
    to="#"
    title="Query the Libra blockchain"
  />
</BucketsWrapper>

### Learn

<BucketsWrapper>
  <PrimaryIconBucket 
    description="I want to understand nodes"
    icon="img/docs/node.svg" 
    title="Nodes" 
    to="#"
  />
  <PrimaryIconBucket 
    description="How do transactions work?"
    icon="img/four-squares-temp.png" 
    title="Transactions" 
    to="#"
  />
  <PrimaryIconBucket 
    description="What does a Libra account look like?"
    icon="img/wallet-app.svg" 
    title="Accounts" 
    to="#"
  />
</BucketsWrapper>

### Develop

<BucketsWrapper>
  <LeftIconBucket
    icon="img/four-squares-temp.png"
    title="Read me the core specifications"
    to="#"
  />
  <LeftIconBucket
    icon="img/four-squares-temp.png"
    title="Using the client SDK"
    to="#"
  />
  <LeftIconBucket
    icon="img/core-contributors.svg"
    title="Show me the developer APIs"
    to="#"
  />
</BucketsWrapper>


* This software is the first implementation of the Libra protocol and the Move language.
* Libra Core includes both validator and client functionalities.
* Libra Core is written in Rust.

## Component READMEs of Libra Core

* [Admission Control](crates/admission-control.md)
* [Bytecode Verifier](crates/bytecode-verifier.md)
* [Consensus](crates/consensus.md)
* [Crypto](crates/crypto.md)
* [Execution](crates/execution.md)
* [Mempool](crates/mempool.md)
* [Move IR Compiler](crates/ir-to-bytecode.md)
* [Move Language](crates/move-language.md)
* [Network](crates/network.md)
* [Storage](crates/storage.md)
* [Virtual Machine](crates/vm.md)
