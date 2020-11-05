import React from 'react';
function AddressToBech32({ onSubmit }) {
    return (React.createElement("div", { className: "card m-4 border-0 shadow-sm" },
        React.createElement("div", { className: "card-body" },
            React.createElement("form", { onSubmit: (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    onSubmit(`address_to_bech32 --address ${formData.get('address')} ${formData.get('subaddress') ? ` --subAddress ${formData.get('subaddress')}` : ''} --hrp tlb`);
                } },
                React.createElement("h2", { className: "h4" }, "Address To Bech32"),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", null, "Address"),
                    React.createElement("input", { type: "text", name: "address", required: true, className: "form-control" })),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", null, "Sub address"),
                    React.createElement("input", { type: "text", name: "subaddress", required: true, className: "form-control" })),
                React.createElement("button", { type: "submit", className: "btn btn-primary btn-sm" }, "Type in")))));
}
export default AddressToBech32;
