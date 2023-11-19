import React, { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import ToastContext from './useToast';
import { Toast } from '../components/common/toast/Toast';

interface ContextProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<{
    text: string;
    statusEnum: 'warn' | 'success' | 'error';
  } | null>(null);

  const showToast = (
    text: string,
    statusEnum: 'warn' | 'success' | 'error',
  ) => {
    setToast({ text, statusEnum });

    // Esconde o toast após alguns segundos (por exemplo, 3 segundos)
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast text={toast.text} statusEnum={toast.statusEnum} />}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
