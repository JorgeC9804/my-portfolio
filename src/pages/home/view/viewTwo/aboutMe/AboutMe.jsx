import React, { useRef, useEffect, useState } from "react";
import { CloseSquareOutlined } from '@ant-design/icons'; 
import { AiFillGithub } from 'react-icons/ai';
import './about.styles.css';

const AboutMe = ({handleAboutMe, aboutMeOne, aboutMeTwo, btnClose}) => {

    const reference = useRef(null);
    const [mouseOnOff, setMouseOnOff] = useState(false);
    
    const mouseOver = () => {
        //setMouseOnOff(!mouseOnOff);
        //console.log('on');
        setMouseOnOff(true);
    }
    const mouseOut = () => {
        //console.log('off')
        setMouseOnOff(false);
    }
    useEffect( () => {
        reference.current.addEventListener('mouseover', mouseOver);
        reference.current.addEventListener('mouseout', mouseOut );
    }, [] )
 
    return (
        <section className="me-principal display-center">        
            <div className="container display-center">
                <div className={aboutMeOne}>
                    <p align='justify'>
                        I'm Jorge Castro a front-end interactive developer from Mexico.
                        <br />
                        I am 23 years old and an architect of unusual structures that spring up like islands 
                        <br />
                        in the great ocean of my imagination.
                        <br />
                        I like to imagine an efficient and intelligent design where my users experience epinephrine
                        experimenten <span ref={reference} style={{cursor:'pointer', color:'rgb(248, 42, 76)'}}>epinefrina </span>
                        {mouseOnOff ? 'saca perro' : ''}
                    </p>
                </div>    
                <div className={aboutMeTwo}>
                    <h2>
                        Herramientas que se utilizar
                        se les aplicara animacion
                        <AiFillGithub />
                    </h2>
                </div>    
                <button className={btnClose} onClick={handleAboutMe}>
                    <CloseSquareOutlined />
                </button>          
            </div>        
        </section>
    )
};

export default AboutMe;