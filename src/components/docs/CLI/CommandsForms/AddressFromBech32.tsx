import React from 'react';

function AddressFromBech32({
  onSubmit,
}: {
  onSubmit: (command: string) => void;
}) {
  return (
    <div className="card m-4 border-0 shadow-sm">
      <div className="card-body">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit('submit');
          }}
        >
          <h2 className="h4">Address From Bech32</h2>
          <button type="submit" className="btn btn-primary btn-sm">
            Run
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddressFromBech32;
