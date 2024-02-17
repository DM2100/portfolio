import React, { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export const Projects = () => {
  const [ref, inView] = useInView();
  const cardAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    delay: 500,
  });

  const textAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50px)",
    delay: 500,
  });

  return (
    <div ref={ref} className="container py-5 my-5 " id="Project">
      <div className="row text-center align-items-center justify-content-center d-flex my-5 modules">
        <animated.div
          className="col-lg-6 order-lg-1 d-flex flex-column align-items-end justify-content-center justify-content-md-start"
          style={textAnimation}
        >
          <h1 className="project-text text-md-center text-center mb-0">
            Finished Work
          </h1>
          <FaArrowLeft
            className="ms-3 mt-4 arrow-icon"
            style={{ color: "#C6DCBA", width: "303px", fontSize: "44px" }}
          />
        </animated.div>
        <div className="col-lg-6 order-lg-0 my-4">
          <div className="row justify-content-center justify-content-lg-start">
            <animated.div className="col-md-6" style={cardAnimation}>
              <div className="card bg-transparent  my-3">
                <img
                  className="card-img-top img-fluid"
                  src="images/music db.png"
                  alt="Music DB"
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                />
              </div>
              <p className="text-start mt-2 info-text">
                This project is for music application <br />
                The design is made for mobile.
              </p>
              <h5 className="text-start skill-text">
                Main skill used: React.js
              </h5>
              <a
                href="https://music-project3.netlify.app/"
                target="_blank"
                className="project-btns text-start btn41-43 btn-42"
                style={{
                  display: "block",
                  textDecoration: "none",
                  width: "120px",
                }}
              >
                View Project
              </a>
            </animated.div>
            <animated.div className="col-md-6" style={cardAnimation}>
              <div className="card bg-transparent  my-3">
                <img
                  className="card-img-top img-fluid"
                  src="images/_streetartists.png"
                  alt="Street Artists"
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                />
              </div>
              <p className="text-start mt-2 info-text">
                This project is created for street artists The design is made
                for mobile
              </p>
              <h5 className="text-start skill-text">
                Main skill used: JavaScript
              </h5>
              <a
                href="https://streetartists2.netlify.app/"
                target="_blank"
                className="project-btns text-start btn41-43 btn-42"
                style={{
                  display: "block",
                  textDecoration: "none",
                  width: "120px",
                }}
              >
                View Project
              </a>
            </animated.div>
            <animated.div className="col-md-6" style={cardAnimation}>
              <div className="card bg-transparent my-3">
                <img
                  className="card-img-top img-fluid"
                  src="images/project2.png"
                  alt="Street Artists"
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                />
              </div>
              <p className="text-start mt-2 info-text">
                This project is created to build social profiles and gain
                profits
              </p>
              <h5 className="text-start skill-text">
                Main skill used: Bootstrap
              </h5>
              <a
                href="https://project-1-fullyresponsive.netlify.app/"
                target="_blank"
                className="project-btns text-start btn41-43 btn-42"
                style={{
                  display: "block",
                  textDecoration: "none",
                  width: "120px",
                }}
              >
                View Project
              </a>
            </animated.div>
            <animated.div className="col-md-6" style={cardAnimation}>
              <div className="card bg-transparent my-3">
                <img
                  className="card-img-top img-fluid"
                  src="images/restaurant.png"
                  alt="Street Artists"
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                />
              </div>
              <p className="text-start mt-2 info-text">
                This project is created for restaurants The design is responsive
              </p>
              <h5 className="text-start skill-text">
                Main skill used: React.js{" "}
              </h5>
              <a
                href="https://restaurant-pr.netlify.app/"
                target="_blank"
                className="project-btns text-start btn41-43 btn-42"
                style={{
                  display: "block",
                  textDecoration: "none",
                  width: "120px",
                }}
              >
                View Project
              </a>
            </animated.div>
            <animated.div className="col-md-12" style={cardAnimation}>
              <div className="card bg-transparent my-3">
                <img
                  className="card-img-top img-fluid"
                  src="images/krik-project.png"
                  alt="Street Artists"
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                />
              </div>
              <p className="text-start mt-2 info-text">
                This project is created for CYA KRIK.KRIK is nonprofitable
                organisation which is created by young people leaded by young
                people and work for young people.
              </p>
              <h5 className="text-start skill-text">
                Main skill used: Next.js{" "}
              </h5>
              <a
                href="https://krik-project.vercel.app/"
                target="_blank"
                className="project-btns text-start btn41-43 btn-42"
                style={{
                  display: "block",
                  textDecoration: "none",
                  width: "120px",
                }}
              >
                View Project
              </a>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
