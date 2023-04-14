import { type } from '@testing-library/user-event/dist/type';
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
        {message}
      </p>
      <button
        className={styles.closeButton}
        onClick={onCloseClick}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
