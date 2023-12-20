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
    <header className='bg-white shadow fixed w-full z-10 font-semibold text-xl sm:text-sm md:text-xl'>
      <div className=" w-full flex items-center justify-between py-4 ">
        <div className='flex ml-2' onClick={scrollToTop}>
          <img src={logo} alt="Logo" className="h-8 flex items-center justify-center" /> <div className='ml-4'>Yeon's portfolio</div>
        </div>
        <nav className="flex items-center space-x-4 mr-6">
          <div className="text-gray-800 hover:text-blue-300/60 cursor-pointer" onClick={scrollToProfile}>
            About me
          </div>
          <div className="text-gray-800 hover:text-blue-300/60 cursor-pointer" onClick={scrollToProjects}>
            Projects
          </div>
          <div className="text-gray-800 hover:text-blue-300/60 cursor-pointer" onClick={scrollToSkills}>
            Skills
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;