---
id: nodes
title: Libra Nodes
sidebar_label: Libra Nodes
---


A Libra node is a peer entity of the Libra ecosystem that tracks the state of the Libra Blockchain. Libra clients interact with the Libra Blockchain via Libra nodes. There are two types of nodes:

* [Full Nodes](https://docs.google.com/document/d/1wsP47tnTQBSAYuWdVsbuJ8LluRNpYEzBflRXIpYutSU/edit#bookmark=kix.rcz32i2lslgv)
* [Validating Nodes (Validators)](https://docs.google.com/document/d/1EVVy6sEW-LQ5pNBu0rDn-o5m40hbOaM1ynNkfYK3xjQ/edit#bookmark=id.cn4mrz8th0jp)

Each Libra node comprises several logical components like client service, [mempool](https://developers.libra.org/docs/reference/glossary#mempool), storage, consensus, execution, state synchronizer, secret service, and [virtual machine](https://developers.libra.org/docs/reference/glossary#virtual-machine). The Libra Core software can be configured to run as a validating node or as a full node; the primary distinction between the two is that consensus is disabled in full nodes.

## Full Nodes
Libra Full Nodes (FNs) do not participate in consensus but follow the state of blockchain executing the committed transactions in the Libra network. FNs also accept submission of transactions from Libra clients. The Libra network consists of Public Full Nodes (PFNs) that can be run by anyone. PFNs connect to Validator-operator Full Nodes (VoFNs), which act as a bridge to the Validators.

![img](https://lh5.googleusercontent.com/J3sZROBPlWjahbFGo13xZpW-cNOybtRjHjpBdMHxLoKIqWdI8MdL22OwJ6gy46V5g728yB8Ca7LF_p9QzDQC7b5fNMZl7MeL2_HSll36-hu9BBhp7a0PW5Vxq-cacJDfkPT175oy)(**UPDATE GRAPHIC:** Rename to “Full Node.” Update the graphic to include secret service and state synchronizer??. Show mempool and consensus as disabled).

### Validator-operated FN (VoFN)

A VoFN is characterized by the following:

* Consensus is disabled.
* Submitted transactions are proxied upstream to either its validator or to other VoFNs for failover.
* It’s part of its associated validator’s full node network.
* Directly connects to its validator to synchronize to the latest state of the blockchain.
* Some VoFNs are configured to participate in the PFN network and seed data for nodes outside its administrative boundary.
* It has copy of the Libra blockchain.

### Public FN

A PFN is characterized by the following:

* The same software as a VoFN.
* Consensus is Disabled.
* Directly connects to one or more VoFNs to submit transactions and synchronize the state of the block chain.

### Why Full Nodes?

* FNs protect Libra validators from Distributed Denial of Service (DDoS) attacks.
  * Clients submit transactions through FNs which can filter out bad transactions.
  * Other PFNs synchronize indirectly with Validators.
  * VoFNs insulate the Validators from external attacks.
* FNs verify the state of the network.
  * FNs execute all transactions committed by validators.
  * If the chain violates safety rules, FNs will reject those transactions.
* FNs make it easier to scale read traffic.
    * As more clients join the ecosystem, new FNs can be added to support the additional traffic.
    * FNs provide a pub-sub mechanism to notify clients of transactions occurring on the account(s) of interest to the clients, thus clients do not need to sychronize the entire state of the blockchain.
* Third-party blockchain explorers, wallets, exchanges, and DApps may run a local FN to*:*
    * Get a consistent view of the Libra network.
    * Avoid rate limitations on read traffic.
    * Run custom analytics on historical data.
    * Get notifications about particular on-chain events.



## Validator Nodes (Validators)

A validator node participates in consensus and validates the transactions submitted by a Libra client. It has the knowledge of the current state of the blockchain. Validators maintain the Libra database and process transactions submitted by clients for inclusion in the database. The validators use a distributed consensus protocol to agree on an ever-growing list of transactions that have been committed to the database as well as the results of executing those transactions.![img](https://lh5.googleusercontent.com/J3sZROBPlWjahbFGo13xZpW-cNOybtRjHjpBdMHxLoKIqWdI8MdL22OwJ6gy46V5g728yB8Ca7LF_p9QzDQC7b5fNMZl7MeL2_HSll36-hu9BBhp7a0PW5Vxq-cacJDfkPT175oy)

A validator is characterized by the following:

* It participates in consensus

* Client service component is disabled

* It’s part of the validator p2p sync. network.

*  [Long Term - It may be configured to store either all the historical data or part of the historical data from the Libra Blockchain.]

*  It uses its State Synchronizer component (described later) to “catch up” to the latest state of the blockchain.

* It can be configured to participate in it’s Full Node Network and seed data to its full nodes (VoFNs).



### Services Running on a Node (WIP)
* Client service
* Mempool
* Virtual Machine
* Consensus
* Execution
* Secret Service


[TBD: Elaborate each service or link to corresponding README?]

### Node Networks
Depending on their configuration, nodes can form different p2p state sync. networks. Each Libra node can participate in multiple networks as shown in the figure below.
* Validator’s Full Node Network
* Validator Network
* Public Full Node Network
![full_nodes.png](https://lh6.googleusercontent.com/8n1gPyh1kh1_j0NP5f_XeqRBzf5aXV6zGxUK3hZcWuAFevUB5oB6YfZdvtRnCj5uxtBuGYOPGPRmpFkwXqqYJdzW_XqDWXUmSFRAZbI8Chb3NoPeZv7DxsNHqXeMOgWzqRUwk1we)(**UPDATE GRAPHIC** - Recreate this graphic)



#### 3 Tier Architecture

* Libra validators, validator operated full nodes (VoFNs), and public full nodes (PFNs) form a 3-tiered architecture.
* Only the full nodes inside a validator’s administrative domain are configured to join the validator’s full node network.
* A PFN network is not p2p. A PFN receives updates on new blocks only from the VoFN it is connected to.



#### Separate Network Stacks

The Libra ecosystem has separate network stacks for the different types of Libra nodes. The advantages of having separate network stacks are:

* Clean separation between the different networks.
* Better support for security preferences (permissioned vs permissionless).
* Allows for isolated discovery protocols.
* Each validator shares the DNS for its own trusted full nodes during validator discovery gossip.
