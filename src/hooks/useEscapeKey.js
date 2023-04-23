import React from 'react';

function useEscapeKey(fn) {
  React.useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        fn()
      }
    });
  }, [fn])
}

export default useEscapeKey;