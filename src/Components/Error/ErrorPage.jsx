import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import ErrorImg from '../../assets/error-404.png';

const ErrorPage = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <section className="flex-1 flex flex-col justify-center items-center">
        <img
          className="mb-10"
          src={`${ErrorImg}`}
          alt="Oops, page not found!"
        />
        <h1 className="text-[#001931] text-5xl font-bold mb-4">
          Oops, page not found!
        </h1>
        <p className="text-[#627382]">
          The page you are looking for is not available.
        </p>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default ErrorPage;
