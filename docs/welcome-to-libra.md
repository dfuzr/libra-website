---
id: welcome-to-libra
title: Welcome Libra Developers
disable_pagination: true
sidebar_label: Home
include_marketing_module: false
small_title: true
---

Explore the technical and economic concepts behind the Libra Payment Network, experiment with specialized tutorials, or start building with the Development Tools.

<NotificationBar>
  <p>
    The first phase of the Libra Network will be restricted to regulated virtual asset service providers (VASPs). Click <a href="/docs/reference/prospective-vasps">here</a> to see if your organization qualifies as a VASP.
  </p>
</NotificationBar>

### Topics

<CardsWrapper>
  <OverlayCard
    description="Protocol Overview, Transaction Types,  Nodes, Accounts"
    icon="img/core-contributors.svg"
    iconDark="img/core-contributors-dark.svg"
    title="Libra Core"
    to="/docs/core/overview"
  />
  <OverlayCard
    description="Requirements, Configuration, Running  a Local Network"
    icon="img/node-operators.svg"
    iconDark="img/node-operators-dark.svg"
    title="Nodes"
    to="/docs/node/overview"
  />
  <OverlayCard
    description="Integration, Reference Wallet"
    icon="img/wallet-app.svg"
    iconDark="img/wallet-app-dark.svg"
    title="Wallets"
    to="/docs/wallet-app/overview"
  />
  <OverlayCard
    description="Integration, Reference Merchant"
    icon="img/docs/merchant-solutions.svg"
    iconDark="img/docs/merchant-solutions-dark.svg"
    title="Merchants"
    to="/docs/merchant/overview"
  />
  <OverlayCard
    description="Key Components,  Writing Modules,  Testing & Debugging"
    icon="img/move.svg"
    iconDark="img/move-dark.svg"
    title="Move"
    to="/docs/move/overview"
  />
</CardsWrapper>

### Learning

<MultiStepSnippet
  defaultValue="my-first-transaction"
  values={[
    { value: 'run-move', label: (
      <ColorCard
        color="purpleDark"
        icon="img/overlapping-circle-and-square.svg"
        overlay="Execute a sample Move script in a local network "
        title="Wallet Demo"
        type="snippetTab"
      />
    )},
    { value: 'demo-wallet', label: (
      <ColorCard
        color="purpleLight"
        icon="img/bobby-pin.svg"
        overlay="Demo the Libra Reference Wallet to learn how wallets work on the blockchain."
        title="Merchant Demo"
        type="snippetTab"
      />
    )},
  ]
}>
<MultiStepTabItem value="my-first-transaction" learnMoreLink="/docs/core/my-first-transaction">

```bash
# Create two accounts and transfer LBR between the two.
# This uses the testnet for experimentation

libra% account create
libra% account create
libra% account list
libra% account mint 0 110 LBR
libra% account mint 1 52 LBR
libra% query balance 0
libra% query balance 1
libra% transfer 0 1 10 LBR
libra% query balance 0
libra% query balance 1

libra% account create
libra% account create
libra% account list
libra% account mint 0 110 LBR
libra% account mint 1 52 LBR
libra% query balance 0
libra% query balance 1
libra% transfer 0 1 10 LBR
libra% query balance 0
libra% query balance 1
```

</MultiStepTabItem>
<MultiStepTabItem value="run-move" learnMoreLink="/docs/move/run-move-locally">

```bash
script {
  use 0x0::LibraAccount;
  use 0x0::LBR;
  use 0x0::Transaction;
  use 0x717da70a461fef6307990847590ad7af::MyModule;

  fun main(amount: u64) {
    let coin = LibraAccount::withdraw_from_sender<LBR::T>(amount);
    // Calls the id procedure defined in our custom module
    LibraAccount::deposit<LBR::T>(Transaction::sender(), MyModule::id(coin));
  }
}
```

</MultiStepTabItem>
<MultiStepTabItem value="demo-wallet">

```bash
git clone git@github.com:libra/libra-wallet.git
```

</MultiStepTabItem>
</MultiStepSnippet>

### Tools

<CardsWrapper cardsPerRow={4}>
  <SimpleCard
    icon="img/document.svg"
    iconDark="img/document-dark.svg"
    title="SDKs"
    to="/docs/core/contributing"
  />
  <SimpleCard
    icon="img/core-contributors.svg"
    iconDark="img/core-contributors-dark.svg"
    title="CLI"
    to="/docs/core/contributing"
  />
  <SimpleCard
    icon="img/github.svg"
    iconDark="img/github-dark.svg"
    title="GitHub"
    to="/docs/core/contributing"
  />
  <SimpleCard
    icon="img/rust.png"
    iconDark="img/rust-dark.png"
    title="Rust Crates"
    to="/docs/core/contributing"
  />
</CardsWrapper>
