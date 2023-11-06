import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';

/* Screens */
import { RegisterView } from '../modules/travels/screens/Register/view';
import { LoginView } from '../modules/travels/screens/Login/view';

const Router = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </NativeRouter>
  );
};

export default Router;