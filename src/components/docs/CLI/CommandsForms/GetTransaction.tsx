import React from 'react';

function GetTransaction({ onSubmit }: { onSubmit: (command: string) => void }) {
  return (
    <div className="card m-4 border-0 shadow-sm">
      <div className="card-body">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            onSubmit(
              `get_transaction --txVersion ${formData.get('txVersion')}${
                formData.get('includeEvents') ? ' --includeEvents' : ''
              }${formData.get('prettify') ? ' --prettify' : ''}`
            );
          }}
        >
          <h2 className="h4">Get Transaction</h2>
          <div className="form-group">
            <label>Version</label>
            <input
              type="number"
              name="txVersion"
              required
              className="form-control"
            />

            <div className="form-check">
              <input
                type="checkbox"
                name="includeEvents"
                className="form-check-input"
                id="checkIncludeEvents"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="checkIncludeEvents">
                Include Events
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                name="prettify"
                className="form-check-input"
                id="checkPrettify"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="checkPrettify">
                Prettify
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-sm">
            Run
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetTransaction;
