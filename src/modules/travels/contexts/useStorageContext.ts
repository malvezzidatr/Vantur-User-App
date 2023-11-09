// MeuContexto.tsx
import { createContext, useContext } from 'react';

interface StorageContextValue {
  getStorageValue: (key: string) => any;
  setStorageValue: (key: string, value: any) => void;
  deleteStorageValue: (key: string) => void;
}

const StorageContext = createContext<StorageContextValue | undefined>(
  undefined,
);

export const useStorageContext = (): StorageContextValue => {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error(
      'useStorageContext deve ser utilizado dentro de um ContextProvider',
    );
  }
  return context;
};

export default StorageContext;
