import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./intro.scss";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    const options = {
      strings: ["Full Stack Developer", "Software Engineer"],
      typeSpeed: 60,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 500,
      showCursor: true,
      loop: true,  
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="photo1698331650.png" alt="it is me eden" />
        </div>
      </div>
      <div className="right">
        <h3>𝓭𝓸𝓷𝓸𝓽 𝓯𝓸𝓻𝓰𝓸𝓽 𝓽𝓱𝓮 𝓯𝓲𝓻𝓼𝓽 𝓹𝓻𝓸𝓰𝓻𝓪𝓶𝓶𝓮𝓻 𝔀𝓪𝓼 𝓪 𝔀𝓸𝓶𝓪𝓷.🔥</h3>
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>Eden Bekele</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
