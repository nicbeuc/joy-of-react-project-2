import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastProvider({children}) {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toastList, setToastList] = React.useState([]);

  useEscapeKey(() => {
    setToastList([]);
  })

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

  const value = {
    message,
    variant,
    toastList,
    setMessage,
    setVariant,
    setToastList,
    handleFormSubmit,
    handleCloseClick
  }

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
