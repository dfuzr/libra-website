import React from 'react';

function GetAccount({ onSubmit }: { onSubmit: (command: string) => void }) {
  return (
    <div className="card m-4 border-0 shadow-sm">
      <div className="card-body">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            onSubmit(`get_account --address ${formData.get('address')}`);
          }}
        >
          <h2 className="h4">Get Account</h2>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-sm">
            Type in
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetAccount;
