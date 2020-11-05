import React from 'react';

function AddressToBech32({
                           onSubmit
                         }: {
  onSubmit: (command: string) => void;
}) {
  return (
    <div className="card m-4 border-0 shadow-sm">
      <div className="card-body">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            onSubmit(`address_to_bech32 --address ${formData.get('address')} ${formData.get('subaddress') ? ` --subAddress ${formData.get('subaddress')}` : ''} --hrp tlb`);
          }}
        >
          <h2 className="h4">Address To Bech32</h2>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Sub address</label>
            <input
              type="text"
              name="subaddress"
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

export default AddressToBech32;
