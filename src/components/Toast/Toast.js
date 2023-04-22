import React from 'react';
import { X } from 'react-feather';
import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

function Toast({ message, variant, onCloseClick, Icon}) {
  const variantStyle = typeof variant === 'string' ? styles[variant] : styles.notice;

  return (
    <div className={`${styles.toast} ${variantStyle}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {message}
      </p>
      <button
        className={styles.closeButton}
        onClick={onCloseClick}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
