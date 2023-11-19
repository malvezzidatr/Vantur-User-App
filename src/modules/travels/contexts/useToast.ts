import { createContext, useContext } from 'react';

interface ToastContextValue {
  showToast: (text: string, statusEnum: 'warn' | 'success' | 'error') => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast deve ser utilizado dentro de um ToastProvider');
  }
  return context;
};

export default ToastContext;
