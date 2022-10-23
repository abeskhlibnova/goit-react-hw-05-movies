import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { BoxPage } from './SharedLayout.styled';
// import { Suspense } from 'react';

export default function SharedLayout() {
  return (
    <BoxPage>
      <Navbar />
      <Outlet />
      <footer>Copyright 2022 &copy;</footer>
    </BoxPage>
  );
}
