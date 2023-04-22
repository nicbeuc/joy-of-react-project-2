import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
} from 'react-feather';
import Toast from '../Toast';
import { ToastContext } from '../ToastProvider/ToastProvider';

import styles from './ToastShelf.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function ToastShelf() {
  const {toastList, handleCloseClick} = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
      {toastList.map(({id, message, variant}) => (
        <li
          key={id}
          className={styles.toastWrapper}
        >
          <Toast
            message={message}
            variant={variant}
            Icon={ICONS_BY_VARIANT[variant]}
            onCloseClick={() => handleCloseClick(id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
