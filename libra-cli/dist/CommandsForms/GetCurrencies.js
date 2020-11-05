import React from 'react';
function GetCurrencies({ onSubmit }) {
    return (React.createElement("div", { className: "card m-4 border-0 shadow-sm" },
        React.createElement("div", { className: "card-body" },
            React.createElement("form", { onSubmit: (e) => {
                    e.preventDefault();
                    onSubmit('get_currencies');
                } },
                React.createElement("h2", { className: "h4" }, "Get Currencies"),
                React.createElement("button", { type: "submit", className: "btn btn-primary btn-sm" }, "Run")))));
}
export default GetCurrencies;
