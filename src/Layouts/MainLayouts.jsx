import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayouts = () => {
  return (
    <>
      <section className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <section className="flex-1">
          <Outlet></Outlet>
        </section>
        <Footer></Footer>
      </section>
    </>
  );
};

export default MainLayouts;
