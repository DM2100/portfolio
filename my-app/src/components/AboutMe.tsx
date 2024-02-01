import React from "react";
import img1 from "../images/IMG_6073 (1).png";

const AboutMe = () => {
  const images = [img1];
  return (
    <div className="container pt-5 section" id="AboutMe">
      <div className="row justify-content-center align-items-center info-text">
        <div className="col-md-12 col-lg-6 text-about mb-4">
          <h1 className="greetings-text text-center my-5"> Greetings!</h1>
          <br />
          <h5 className="mx-auto">
            Hello there! I'm <span>Durak Mustafov</span>, a passionate and
            freshly graduated front-end developer on a mission to turn
            imaginative ideas into seamless and engaging digital experiences.
            <br /> <br />
            Take a tour of my portfolio to explore some of my latest projects.
            Each piece reflects not only my technical skills but also my
            dedication to creating meaningful and impactful user experiences I'm
            currently on the lookout for exciting opportunities to contribute my
            skills and passion. <br /> <br /> Feel free to reach out. Thank you for
            visiting, and I look forward to the possibility of working together
            to bring digital visions to life. 🌐✨
          </h5>
        </div>
        <div className="col-md-12 col-lg-6 my-image">
          <img src={img1} alt="" className="rounded-circle img-fluid grayscale-image shadow-on-hover" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
