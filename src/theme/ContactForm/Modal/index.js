import React, {useState} from 'react';

import classnames from 'classnames';
import styles from './styles.module.css';

const Modal = ({ children, id, showModal, setShowModal }) => {
  const exitModal = () => setShowModal(false);

  return (
    <div id={id} className={classnames("modal", {
      "visible": showModal,
    })} onClick={exitModal}>
      <div className={styles.outer} onClick={e => e.stopPropagation()}>
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
