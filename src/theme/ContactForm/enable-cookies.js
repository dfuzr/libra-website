import React from 'react';

import Modal from './Modal';

const enableCookies = () => {
  document.cookie = `${window.trackingCookieConsent}=true`;
  location.reload();
};

const EnableCookies = ({ baseUrl }) => {
  return (
    <Modal classNames="visible">
      <h2>Please enable cookies to use this form</h2>
      <div className="buttonWrapper">
        <a className="button secondary" onClick={enableCookies}>
          Click to Enable Cookies
        </a>
        <a className="button secondary" href="/">
          Return to homepage
        </a>
      </div>
    </Modal>
  );
};

export default EnableCookies;
