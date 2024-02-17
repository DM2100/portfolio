import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export const MyModules = () => {
  const [textRef, textInView] = useInView({ threshold: 0.5 });
  const [imageRef, imageInView] = useInView({ threshold: 0.5 });

  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: textInView ? 1 : 0, transform: textInView ? "translateX(0)" : "translateX(-50px)" },
    config: { duration: 1000 },
  });

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(50px)" },
    to: { opacity: imageInView ? 1 : 0, transform: imageInView ? "translateX(0)" : "translateX(50px)" },
    config: { duration: 1000 },
    delay: 1000, 
  });

  return (
    <div className="container py-5" id="Achievements">
      <div className="row text-center align-items-center justify-content-center d-flex my-5 modules">
        <div className="col-lg-6 order-lg-0 d-flex flex-column align-items-center justify-content-center justify-content-md-start" ref={textRef}>
          <animated.div style={textAnimation}>
            <h1 className="ach-text text-md-center text-center mb-0">
              Achievements Goals
            </h1>
            <FaArrowRight
              className="ms-3 arrow-icon mt-4 animate-arrow"
              style={{ color: "#fafafa", width: "53px", fontSize: "44px" }}
            />
          </animated.div>
        </div>
        <div className="col-lg-6 order-lg-1" ref={imageRef}>
          <div className="row justify-content-center justify-content-lg-end">
            {[
              "images/file-type-html.902x1024.png",
              "images/file-type-css.902x1024.png",
              "images/file-type-sass.1024x767.png",
              "images/github.1024x994.png",
              "images/bootstrap-plain-wordmark.899x1024.png",
              "images/javascript-js.1024x1024.png",
              "images/react.1024x911.png",
              "images/1657707878-nextjs_logo.png"
            ].map((src, index) => (
              <animated.div className="col-md-6" key={index} style={imageAnimation}>
                <img
                  className="my-3 ach-img slideAndBounce"
                  src={src}
                  alt=""
                  style={{ width: "100px", height: "90px" }}
                />
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModules;
