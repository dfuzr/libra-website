import React from 'react';

function GetMetadata({ onSubmit }: { onSubmit: (command: string) => void }) {
  return (
    <div className="card m-4 border-0 shadow-sm">
      <div className="card-body">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            if (formData.get('version')) {
              onSubmit(`get_metadata --version ${formData.get('version')}`);
            } else {
              onSubmit(`get_metadata`);
            }
          }}
        >
          <h2 className="h4">Get Metadata</h2>
          <div className="form-group">
            <label>Version</label>
            <input type="number" name="version" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary btn-sm">
            Run
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetMetadata;
