import React, { useState, useRef, useEffect } from "react";
import "./two.styles.css";
//import spider from '../../../pictures/spider.jpg'
import Sound from "./Sound";
import AboutMe from "./aboutMe/AboutMe";

const ViewTwo = ({ handleChange, change }) => {
  const photoRef = useRef(null);
  const infoRef = useRef(null);
  const colorBackground = [
    "line red",
    "line green",
    "line yellow",
    "line purple",
  ];
  //const [change, setChange] = useState(true);
  const [color, setColor] = useState(0);
  const [adjust, setAdjust] = useState("predeterminado width-3");
  const [imageMe, setImageMe] = useState(false);
  const [info, setInfo] = useState(false);
  const [active, setActive] = useState(true);
  const [aboutMeOne, setAboutMeOne] = useState("none");
  const [aboutMeTwo, setAboutMeTwo] = useState("none");
  const [btnClose, setBtnClose] = useState("none");

  /*const handleChange = () => {
        setChange(!change);
    }*/

  const handleAboutMe = () => {
    setAdjust("predeterminado width-3");
    if (active) {
      setAboutMeOne("about-me col-1");
      setTimeout(() => {
        /**activara cuadro uno y abra un atrazo e tiempo de 7 milisegundos para activar cuadro 2
         * cambiara el estatus de active de true a false para ocultar los cuadros
         */
        setAboutMeTwo("about-me col-2");
        setBtnClose("btn-close open"); //actibe button
      }, 400);
      setActive(false);
    } else {
      /**puede funcionar muy bien si el else, aun asi falta crear la propiedad de cierre animado */
      setAboutMeOne("about-me close-col-1");
      setBtnClose("btn-close close");
      setTimeout(() => {
        /**primero deja pasar al cuadro, despues de 5 microsegundos se ejecutara */
        setAboutMeTwo("about-me close-col-2");
      }, 300);
      setTimeout(() => {
        setActive(true);
        setAboutMeTwo("none");
        setBtnClose("none");
      }, 800);
    }
  };

  const handleBackground = () => {
    if (color + 1 > 3) {
      setColor(0);
    } else setColor(color + 1);
  };

  useEffect(() => {
    const callbackPhoto = entries => {
      const [entry] = entries; //desetructura un arreglo
      setImageMe(entry.isIntersecting);
    };
    const callbackInfo = entries => {
      const [entry] = entries; //desetructura un arreglo
      setInfo(entry.isIntersecting);
    };
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.0,
    };
    const optionsinfo = {
      root: null,
      rootMargin: "-50.0px",
      threshold: 0.0,
    };

    // no son necesarias
    const photoReference = photoRef.current;
    const infoReference = infoRef.current;

    const photoObserver = new IntersectionObserver(callbackPhoto, options);
    const infoObserver = new IntersectionObserver(callbackInfo, optionsinfo);

    photoObserver.observe(photoReference);
    infoObserver.observe(infoReference);

    return () => {
      photoObserver.unobserve(photoReference);
      infoObserver.unobserve(infoReference);
    };
  }, []);

  return (
    <div
      className={
        change
          ? "presentation-2 display-center-h"
          : "change-presentation-2 display-center-h"
      }
    >
      <Sound change={change} setAdjust={setAdjust} adjust={adjust} />
      {active ? undefined : (
        <AboutMe
          handleAboutMe={handleAboutMe}
          active={active}
          aboutMeOne={aboutMeOne}
          aboutMeTwo={aboutMeTwo}
          btnClose={btnClose}
        />
      )}
      <img
        src={""}
        alt="update"
        className={imageMe ? "image-me" : "image-me-1"}
        ref={photoRef}
      />
      <div className={info ? "pres-2" : "pres-2-1"} ref={infoRef}>
        <div className="view-2-1 display-center-h">
          <p align="left">
            I am a front-end developer. I like the interaction that a user can
            experience.
            <br />
            Creating a unique experience is an art. A click, loading an image,
            positioning
            <br />
            blocks, creating a world of structures is what makes the difference.
          </p>
          {change ? (
            <button
              onClick={handleChange}
              className={change ? "btn black" : "btn white"}
            >
              !
            </button>
          ) : (
            <button onClick={handleAboutMe} className="btn white b-me">
              About Me
            </button>
          )}
        </div>
      </div>
      <div className={colorBackground[color]} onClick={handleBackground}></div>
    </div>
  );
};

export default ViewTwo;
