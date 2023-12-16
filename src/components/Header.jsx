import React from 'react';
import logo from "../img/logo.png";

const Header = ({ scrollToProfile, scrollToProjects, scrollToSkills}) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <header className='bg-white shadow fixed w-full z-10 font-semibold text-xl'>
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className='flex' onClick={scrollToTop}>
          <img src={logo} alt="Logo" className="h-8" /> <div className='ml-4'>Yeon's portfolio</div>
        </div>
        <nav className="flex items-center space-x-4 ">
          <div className="text-gray-800 hover:text-blue-300/60" onClick={scrollToProfile}>
            About me
          </div>
          <div className="text-gray-800 hover:text-blue-300/60" onClick={scrollToProjects}>
            Projects
          </div>
          <div className="text-gray-800 hover:text-blue-300/60" onClick={scrollToSkills}>
            Skills
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;