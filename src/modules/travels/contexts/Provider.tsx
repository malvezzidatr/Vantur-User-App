// MeuContextoProvider.tsx
import React, { FC, ReactNode, useMemo } from 'react';
import StorageContext from './useStorageContext';
import * as SecureStore from 'expo-secure-store';

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const getStorageValue = async (key: string) => {
    return await SecureStore.getItemAsync(key);
  };

  const setStorageValue = async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
  };

  const deleteStorageValue = async (key: string) => {
    await SecureStore.deleteItemAsync(key);
  };

  const contextValue = useMemo(
    () => ({ getStorageValue, setStorageValue, deleteStorageValue }),
    [getStorageValue, setStorageValue, deleteStorageValue],
  );

  return (
    <StorageContext.Provider value={contextValue}>
      {children}
    </StorageContext.Provider>
  );
};

export default ContextProvider;
