import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';

/* Screens */
import { RegisterView } from '../modules/travels/screens/Register/view';
import { LoginView } from '../modules/travels/screens/Login/view';
import { HomeView } from '../modules/travels/screens/Home/view';

const Router = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/home" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/" element={<LoginView />} />
      </Routes>
    </NativeRouter>
  );
};

export default Router;
