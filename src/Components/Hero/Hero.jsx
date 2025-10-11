import React from 'react';
import playStore from '../../assets/play-store.png';
import appStore from '../../assets/app-store.png';
import heroImg from '../../assets/hero.png';

const Hero = () => {
  return (
    <section className="pt-20 container mx-auto max-sm:w-11/12">
      <div className="text-center mb-10">
        <h1 className="text-7xl font-bold text-[#001931] mb-4 max-sm:text-5xl">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{' '}
          Apps
        </h1>
        <p className="text-[#627382] mb-10">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex items-center justify-center gap-2">
          <a href="https://play.google.com/" target="_blank">
            <img className="w-36" src={playStore} alt="Get it on Google Play" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank">
            <img
              className="w-36"
              src={appStore}
              alt="Download on the app store"
            />
          </a>
        </div>
      </div>

      <div>
        <img className="mx-auto" src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
