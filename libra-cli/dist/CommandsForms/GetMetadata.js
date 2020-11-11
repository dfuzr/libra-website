import React from 'react';
function GetMetadata({ onSubmit }) {
    return (React.createElement("div", { className: "card m-4 border-0 shadow-sm" },
        React.createElement("div", { className: "card-body" },
            React.createElement("form", { onSubmit: (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    if (formData.get('version')) {
                        onSubmit(`get_metadata --version ${formData.get('version')}`);
                    }
                    else {
                        onSubmit(`get_metadata`);
                    }
                } },
                React.createElement("h2", { className: "h4" }, "Get Metadata"),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", null, "Version"),
                    React.createElement("input", { type: "number", name: "version", className: "form-control" })),
                React.createElement("button", { type: "submit", className: "btn btn-primary btn-sm" }, "Run")))));
}
export default GetMetadata;
