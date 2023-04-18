import React from 'react';
import ToastShelf from '../ToastShelf';
import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toastList, setToastList] = React.useState([]);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (message.length < 1) return;
    setToastList(
      [...toastList,
        {
          id: crypto.randomUUID(),
          message,
          variant
        }
      ]
    )
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  function handleCloseClick(id) {
    const newToastList = toastList.filter((toast) => toast.id !== id);
    setToastList(newToastList);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastList={toastList} handleCloseClick={handleCloseClick}/>

      <form onSubmit={handleFormSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map((option, index) => (
                <label key={index} htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={option === variant}
                    onChange={(e) => {
                      setVariant(e.target.value)
                    }}
                  />
                  {option}
                </label>
              ))}

            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>
                Pop Toast!
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
