import React, { useRef, useEffect, useState } from "react";
import ViewOne from "./view/ViewOne";
import ViewThree from "./view/ViewThree";
import ViewTwo from "./view/viewTwo/ViewTwo";
import "../styles.css";
import "../styles.css";

const Home = ({ handleChange, change }) => {
  const ref = useRef(null);
  const presentationTwoRef = useRef(null);
  const presentationThreeRef = useRef(null);
  const [presBackGrdTwo, setPresBackGrdTwo] = useState(false);
  const [presBackGrdThree, setPresBackGrdThree] = useState(false);
  const [downPixel, setDownPixel] = useState(0);

  useEffect(() => {
    const callbackTwo = entries => {
      const [entry] = entries;
      const { isIntersecting } = entry;
      setPresBackGrdTwo(isIntersecting);
    };
    const callbackThree = entries => {
      const [entry] = entries;
      const { isIntersecting } = entry;
      setPresBackGrdThree(isIntersecting);
    };
    const options = {
      root: null,
      rootMargin: "-5px",
      threshold: 0.0,
    };
    new IntersectionObserver(callbackTwo, options).observe(
      presentationTwoRef.current
    );
    new IntersectionObserver(callbackThree, options).observe(
      presentationThreeRef.current
    );
  }, []);

  useEffect(() => {
    console.log(ref.current.clientHeight + " pixeles de largo");
    setDownPixel(ref.current.clientHeight);
  }, []);

  return (
    <div className="home">
      <section className="naufrago">
        <div className="presentation-1" ref={ref}>
          <div className="updateName">
            <ViewOne downPixel={downPixel} />
          </div>
        </div>
      </section>
      <section>
        <ViewTwo handleChange={handleChange} change={change} />
      </section>
      <section
        className={presBackGrdTwo ? "presentation-3" : "presentation-3-1"}
        ref={presentationTwoRef}
      >
        <ViewThree />
      </section>
      <section
        className={presBackGrdThree ? "presentation-4" : "presentation-4-1"}
        ref={presentationThreeRef}
      ></section>
    </div>
  );
};

export default Home;
