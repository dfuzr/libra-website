import React from 'react';

import Modal from './Modal';

const DisableAdblock = ({ baseUrl }) => {
  return (
    <Modal id="disable-ad-block">
      <img src={`${baseUrl}img/ab-icon@2x.svg`} alt="Adblock icon" />
      <h2>Please disable your ad blocker!</h2>
      <p>We get it... but it's necessary to submit the form.</p>
      <div className="buttonWrapper">
        <a id="disable-adblock-refresh" className="button secondary" href="">
          Refresh
        </a>
      </div>
    </Modal>
  );
};

export default DisableAdblock;
