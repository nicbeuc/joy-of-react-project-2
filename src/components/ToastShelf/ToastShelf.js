import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
} from 'react-feather';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function ToastShelf({toastList, handleCloseClick}) {
  return (
    <ol className={styles.wrapper}>
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
