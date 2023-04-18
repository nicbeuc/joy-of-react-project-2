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

function ToastShelf({toastList, setToastList}) {
  function handleCloseClick(index) {
    const newToastList = toastList.filter((_, i) => i !== index);
    setToastList(newToastList);
  }

  return (
    <ol className={styles.wrapper}>
      {toastList.map(({id, message, variant}, index) => (
        <li
          key={id}
          className={styles.toastWrapper}
        >
          <Toast
            message={message}
            variant={variant}
            Icon={ICONS_BY_VARIANT[variant]}
            onCloseClick={() => handleCloseClick(index)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
