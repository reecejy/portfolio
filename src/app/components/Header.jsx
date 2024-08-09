"use client";

import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const navToggle = document.getElementById('nav-toggle');
    const navMobile = document.getElementById('nav-mobile');

    const toggleMenu = () => {
      const hamburgerIcon = navToggle.querySelector('.hamburger');
      const closeIcon = navToggle.querySelector('.close');

      navMobile.classList.toggle('hidden');
      navMobile.classList.toggle('flex');
      hamburgerIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    };

    navToggle.addEventListener('click', toggleMenu);
    navMobile.addEventListener('click', toggleMenu);

    // Cleanup event listeners on component unmount
    return () => {
      navToggle.removeEventListener('click', toggleMenu);
      navMobile.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <header className="sticky top-0 z-10">
      {/* logo */}
      <div className="container mx-auto flex justify-between items-center relative p-4  border-b border-gray-200">
        <h1 className="text-base">ReeceJY</h1>

        {/* hamburger menu */}
        <button
          id="nav-toggle"
          className="md:hidden cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger block hover:opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
          <span className="close hidden hover:opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>

        {/* nav desktop */}
        <nav id="nav-desktop" className="hidden md:flex">
          <ul className="flex space-x-4">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* nav mobile */}
        <nav id="nav-mobile" className="fixed inset-0 top-[57px] hidden md:hidden flex-col items-center justify-center bg-white">
          <ul className="flex flex-col items-center justify-center space-y-8">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;