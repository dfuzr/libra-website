import React from 'react';
function GetAccount({ onSubmit }) {
    return (React.createElement("div", { className: "card m-4 border-0 shadow-sm" },
        React.createElement("div", { className: "card-body" },
            React.createElement("form", { onSubmit: (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    onSubmit(`get_account --address ${formData.get('address')}`);
                } },
                React.createElement("h2", { className: "h4" }, "Get Account"),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", null, "Address"),
                    React.createElement("input", { type: "text", name: "address", required: true, className: "form-control" })),
                React.createElement("button", { type: "submit", className: "btn btn-primary btn-sm" }, "Type in")))));
}
export default GetAccount;
