import React from 'react';
import logo from "../img/logo.png";

const Header = ({ scrollToProfile, scrollToProjects, scrollToSkills, scrollPercentage }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const remainingScroll = 100 - Math.round(scrollPercentage);
  const progressBarStyle = {
    width: `${remainingScroll}%`,
    right: 0
  };

  return (
    <header className='bg-white shadow fixed w-full z-10 font-semibold text-xl sm:text-sm md:text-xl'>
      <div className=" w-full flex items-center justify-between py-4 ">
        <div className='flex ml-2 cursor-pointer' onClick={scrollToTop}>
          <img src={logo} alt="Logo" className="h-8 flex items-center justify-center" /> <div className='ml-4'>yeon's portfolio</div>
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
      <div className="bg-blue-300 h-1" style={{ direction: 'rtl' }}>
        <div className="bg-white h-1" style={progressBarStyle}></div>
      </div>
    </header>
  );
};

export default Header;