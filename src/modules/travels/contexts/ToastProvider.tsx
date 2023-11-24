import React, { ReactNode, useState } from 'react';
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

    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast text={toast.text} statusEnum={toast.statusEnum} />}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
