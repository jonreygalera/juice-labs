import React from 'react';

const Navbar = () => {
  return (
    <nav className='border-2'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='#' className='text-2xl font-semibold flex items-center'>Juice Labs</a>

        <div className="items-center justify-between hidden md:flex w-auto" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#contact-us">Contact us</a>
            </li>
            <li>
              <a href="#about-us">About us</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#lang">Lang</a>
            </li>
          </ul>
        </div>

        <div className='flex items-center space-x-0' id="navbar-user">
          <button className='rounded-[50px] px-7 py-2.5 border'>
            <span>Shop Now</span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
