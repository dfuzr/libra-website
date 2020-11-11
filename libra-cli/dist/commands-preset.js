import React, { useState } from 'react';
import { commandsList } from '../../libra-client-sdk-typescript/dist/cli/commands/command';
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
function CommandsPreset({ onCommandSelect }) {
    const [selected, setSelected] = useState();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "card m-4 border-0 shadow-sm" },
            React.createElement("ul", { className: "list-group" }, commandsList.map((commandName) => (React.createElement("li", { key: commandName, className: "list-group-item cursor-pointer" },
                React.createElement("span", { className: 'nav-link' + (commandName === selected ? ' active' : ''), onClick: (e) => {
                        e.preventDefault();
                        setSelected(selected === commandName ? undefined : commandName);
                    } }, commandName)))))),
        selected === 'get_account' && React.createElement(GetAccount, { onSubmit: onCommandSelect }),
        selected === 'get_transactions' && (React.createElement(GetTransactions, { onSubmit: onCommandSelect })),
        selected === 'get_transaction' && (React.createElement(GetTransaction, { onSubmit: onCommandSelect })),
        selected === 'get_account_transaction' && (React.createElement(GetAccountTransaction, { onSubmit: onCommandSelect })),
        selected === 'get_currencies' && (React.createElement(GetCurrencies, { onSubmit: onCommandSelect })),
        selected === 'get_events' && React.createElement(GetEvents, { onSubmit: onCommandSelect }),
        selected === 'get_metadata' && (React.createElement(GetMetadata, { onSubmit: onCommandSelect })),
        selected === 'submit' && React.createElement(Submit, { onSubmit: onCommandSelect }),
        selected === 'address_to_bech32' && (React.createElement(AddressToBech32, { onSubmit: onCommandSelect })),
        selected === 'address_from_bech32' && (React.createElement(AddressFromBech32, { onSubmit: onCommandSelect }))));
}
export default CommandsPreset;
