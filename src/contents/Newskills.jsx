import React, { useState } from 'react'
import { Wrapper, Heading } from '../components/common'
import Languages from '../components/Skills/Languages'
import Front from '../components/Skills/Front'
import Back from '../components/Skills/Back'
import Etc from '../components/Skills/Etc'

const NewSkills = () => {
    const [languagePosition, setLanguagePosition] = useState({ x: '25%', y: '0%' })
    const [frontPosition, setFrontPosition] = useState({ x: 0, y: 0 })
    const [backPosition, setBackPosition] = useState({ x: 0, y: 0 })
    const [etcPosition, setEtcPosition] = useState({ x: 0, y: 0 })
    const [imgVisible, setImgVisible] = useState(true);
    const [img2Visible, setImg2Visible] = useState(false);
    const [img3Visible, setImg3Visible] = useState(false);
    const [img4Visible, setImg4Visible] = useState(false);
  

    const handleLanguageClick = () => {
        setLanguagePosition({ x: '25%', y: '0%' })
        setFrontPosition({ x: 0, y: 0 })
        setBackPosition({ x: 0, y: 0 })
        setEtcPosition({ x: 0, y: 0 })
        setImgVisible(true)
        setImg2Visible(false)
        setImg3Visible(false)
        setImg4Visible(false)
  
        
    }

    const handleFrontClick = () => {
        console.log('sdsjhafdjh')
        setLanguagePosition({ x: 0, y: 0 })
        setFrontPosition({ x: '25%', y: '10%' })
        setBackPosition({ x: 0, y: 0 })
        setEtcPosition({ x: 0, y: 0 })
        setImgVisible(false)
        setImg2Visible(true)
        setImg3Visible(false)
        setImg4Visible(false)
      
    }
    const handleBackClick = () => {

        setLanguagePosition({ x: 0, y: 0 })
        setFrontPosition({ x: 0, y: 0 })
        setBackPosition({ x: '25%', y: '-50%'})
        setEtcPosition({ x: 0, y: 0 })
        setImgVisible(false)
        setImg2Visible(false)
        setImg3Visible(true)
        setImg4Visible(false)
    }
    const handleEtcClick = () => {
  
        setLanguagePosition({ x: 0, y: 0 })
        setFrontPosition({ x: 0, y: 0 })
        setBackPosition({ x: 0, y: 0 })
        setEtcPosition({ x: '25%', y: '-130%' })
        setImgVisible(false)
        setImg2Visible(false)
        setImg3Visible(false)
        setImg4Visible(true)
    }

 

    const handleLanguagesClick = () => {
      setImgVisible(!imgVisible);

    };

    const languageStyle = {
        transform: `translate(${languagePosition.x}, ${languagePosition.y})`,
        transition: 'transform 0.6s ease',
    }

    const frontStyle = {
        transform: `translate(${frontPosition.x}, ${frontPosition.y})`,
        transition: 'transform 0.6s ease',
    }
    const backStyle = {
        transform: `translate(${backPosition.x}, ${backPosition.y})`,
        transition: 'transform 0.6s ease',
    }
    const etcStyle = {
        transform: `translate(${etcPosition.x}, ${etcPosition.y})`,
        transition: 'transform 0.6s ease',
    }

    return (
        <div className="relative">
            <Wrapper>
                <Heading>Skills</Heading>
                <div style={languageStyle}>
                    <Languages onClick={handleLanguageClick} onClick2={imgVisible} />
                </div>
                <div style={frontStyle}>
                    <Front onClick={handleFrontClick} onClick2={img2Visible} />
                </div>
                <div style={backStyle}>
                    <Back onClick={handleBackClick} onClick2={img3Visible}/>
                </div>
                <div style={etcStyle}>
                    <Etc onClick={handleEtcClick} onClick2={img4Visible} />
                </div>
            </Wrapper>
        </div>
    )
}

export default NewSkills
