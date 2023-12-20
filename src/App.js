import React, { useRef, useState } from 'react';
import Profile from './contents/profile';
import Introduce from './contents/introduce';
import Skills from './contents/skills';
import Footer from './contents/footer';
import Header from './components/Header';
import Main from './components/Main';
import NewProjects from './contents/newProjects';


function App() {
  const profileRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const mainRef = useRef(null);

  const scrollToMain = () => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProfile = () => {
    if (profileRef.current) {
      profileRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [selectedContent, setSelectedContent] = useState('NewProjects');

  const handleContentChange = (content) => {
    setSelectedContent(content);
  };


  return (
    <>
     <Header
     scrollToMain={scrollToMain} 
          scrollToProfile={scrollToProfile}
          scrollToProjects={scrollToProjects}
          scrollToSkills={scrollToSkills}/>
    <Main/>
      <div className="w-full h-full bg-gradient-to-b to-white ">
        <div className="w-full md:w-[1100px] mx-auto p-[16px] md:p-[30px] box-border flex flex-col">
        <div ref={profileRef}>
        <Profile />
          </div>
       
         
          {/* introduce */}
          {/* Project Experiencea */}
          <div className='mt-20' ref={projectsRef}>
            {/* <Projects /> */}
            <NewProjects/>
          </div>
          {/* Skills */}
          <div className='mt-20' ref={skillsRef}>
            <Skills />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;