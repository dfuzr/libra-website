import React from 'react';
function AddressFromBech32({ onSubmit, }) {
    return (React.createElement("div", { className: "card m-4 border-0 shadow-sm" },
        React.createElement("div", { className: "card-body" },
            React.createElement("form", { onSubmit: (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    onSubmit(`address_from_bech32 --address ${formData.get('encoded')}`);
                } },
                React.createElement("h2", { className: "h4" }, "Address From Bech32"),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", null, "Encoded address"),
                    React.createElement("input", { type: "text", name: "encoded", required: true, className: "form-control" })),
                React.createElement("button", { type: "submit", className: "btn btn-primary btn-sm" }, "Run")))));
}
export default AddressFromBech32;
