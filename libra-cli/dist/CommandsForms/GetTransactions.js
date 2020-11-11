import React from 'react';
function GetTransactions({ onSubmit, }) {
    return (React.createElement("div", { className: "card m-4 border-0 shadow-sm" },
        React.createElement("div", { className: "card-body" },
            React.createElement("form", { onSubmit: (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    onSubmit(`get_transactions --fromVersion ${formData.get('fromVersion')} --limit ${formData.get('limit')} --includeEvents${formData.get('includeEvents') ? '' : ' false'}${formData.get('prettify') ? ' --prettify' : ''}`);
                } },
                React.createElement("h2", { className: "h4" }, "Get Transaction"),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", null, "From Version"),
                    React.createElement("input", { type: "number", name: "fromVersion", required: true, className: "form-control" }),
                    React.createElement("label", null, "Limit"),
                    React.createElement("input", { type: "number", name: "limit", required: true, className: "form-control" }),
                    React.createElement("div", { className: "form-check" },
                        React.createElement("input", { type: "checkbox", name: "includeEvents", className: "form-check-input", id: "checkIncludeEvents", defaultChecked: true }),
                        React.createElement("label", { className: "form-check-label", htmlFor: "checkIncludeEvents" }, "Include Events")),
                    React.createElement("div", { className: "form-check" },
                        React.createElement("input", { type: "checkbox", name: "prettify", className: "form-check-input", id: "checkPrettify", defaultChecked: true }),
                        React.createElement("label", { className: "form-check-label", htmlFor: "checkPrettify" }, "Prettify"))),
                React.createElement("button", { type: "submit", className: "btn btn-primary btn-sm" }, "Run")))));
}
export default GetTransactions;
