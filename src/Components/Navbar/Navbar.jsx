import React from 'react';
import { RiMenuUnfoldLine } from 'react-icons/ri';
import Logo from '../../assets/logo.png';
import './navbar.css';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router';

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link
          to="/"
          className="text-base !hover:bg-transparent !bg-transparent hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/apps"
          className="text-base !hover:bg-transparent !bg-transparent hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
        >
          Apps
        </Link>
      </li>
      <li>
        <Link
          to="/installation"
          className="text-base !hover:bg-transparent !bg-transparent hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
        >
          Installation
        </Link>
      </li>
    </>
  );

  return (
    <>
      <nav className="bg-base-100 shadow-sm">
        <div className="navbar container mx-auto max-sm:w-11/12">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="mr-4 cursor-pointer lg:hidden"
              >
                <RiMenuUnfoldLine className="text-2xl" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <div>{navLinks}</div>
              </ul>
            </div>

            <a href="/" className="flex items-center gap-1">
              <img src={Logo} className="w-10" alt="" />
              <span className="font-bold text-linear">HERO.IO</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <a
              target="_blank"
              href="https://github.com/azizurrbappy"
              className="btn text-white border-none gap-2 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]"
            >
              <FaGithub className="text-[20px]" />
              Contribute
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
