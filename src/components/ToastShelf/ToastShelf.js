import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
      </li>
    </ol>
  );
}

export default ToastShelf;
