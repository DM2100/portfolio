import { FaGithub, FaArrowRight } from "react-icons/fa";
import img1 from "../images/_streetartists.png";
import img2 from "../images/project2.png";
import img3 from "../images/music db.png";

const MyProjects = () => {
  return (
    <div
      className="container  justify-content-center align-items-center"
      id="project"
    >
      <div className="row py-5 px-2">
        <div className="col-lg-6 col-md-6">
          <div className="img-pr2 mt-5 pt-1">
            <a
              href="https://streetartists2.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={img1}
                alt=""
                style={{ width: "100%", height: "250px", borderRadius: "10px" }}
              />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <h1 className="text-center my-2 heading-text">STREET ARTISTS </h1>
          <div className="project1-text">
            <h2 className="text-start my-2 py-2 mx-2">
              Fully Responsive Page <br />
              Main skill used: JavaScript
            </h2>
            <a
              href="https://streetartists2.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaArrowRight
                style={{
                  fontSize: "2em",
                  color: "black",
                  transform: "rotate(-30deg)",
                  borderLeft: "3px solid black",
                  borderBottom: "3px solid black",
                }}
                className="mx-3"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="img-pr2 mt-5 pt-1">
            <a
              href="https://project-1-fullyresponsive.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={img2}
                alt=""
                style={{ width: "100%", height: "250px", borderRadius: "10px" }}
              />
            </a>
          </div>
        </div>{" "}
        <div className="col-lg-6 col-md-6">
          <h1 className="text-center my-2 heading-text">BLOGGER PAGE</h1>
          <div className="project1-text">
            <h2 className="text-start my-2 py-2 mx-2">
              Fully Responsive Page <br />
              Main skill used: HTML,CSS,BOOTSTRAP
            </h2>
            <a
              href="https://project-1-fullyresponsive.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaArrowRight
                style={{
                  fontSize: "2em",
                  color: "black",
                  transform: "rotate(-30deg)",
                  borderLeft: "3px solid black",
                  borderBottom: "3px solid black",
                }}
                className="mx-3"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="img-pr2 mt-5 pt-1 last-img">
            <a
              href="https://music-project3.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={img3}
                alt=""
                style={{ width: "100%", height: "250px", borderRadius: "10px" }}
              />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <h1 className="text-center my-2 heading-text">
            MUSIC DB ARTISTS PAGE
          </h1>
          <div className="project1-text">
            <h2 className="text-start my-2 py-2 mx-2">
              Fully Responsive Page <br />
              Main skill used: React.js (TypeScript)
            </h2>
            <a
              href="https://music-project3.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaArrowRight
                style={{
                  fontSize: "2em",
                  color: "black",
                  transform: "rotate(-30deg)",
                  borderLeft: "3px solid black",
                  borderBottom: "3px solid black",
                }}
                className="mx-3"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
