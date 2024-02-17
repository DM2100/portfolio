import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

const scrollToContact = () => {
  const contactSection = document.getElementById("ContactMe");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

export const AboutMe = () => {
  const [ref, inView] = useInView();

  const textAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(100px)",
    config: config.slow,
  });

  const imageAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.8)",
    config: config.slow,
  });
  const downloadPdf = () => {
    const pdfUrl = process.env.PUBLIC_URL + "/Durak Mustafov-resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "Durak Mustafov-resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container my-5 py-5" id="AboutMe" ref={ref}>
      <div className="row my-5 py-5">
        <div className="col-lg-6 about-text">
          <animated.h1
            className="text-dev text-md-center d-flex align-items-center justify-content-center text-lg-start filled-animation my-2"
            style={textAnimation}
          >
            FRONT-END DEVELOPER.
          </animated.h1>
          <animated.h4
            className="mt-5 text-lg-start text-md-center about-me-text"
            style={textAnimation}
          >
            I'm <span>Durak Mustafov</span>, a passionate and freshly graduated
            front-end developer on a mission to turn imaginative ideas into
            seamless and engaging digital experiences. <br /> Take a tour of my
            portfolio to explore some of my latest projects. <br /> I'm
            currently on the lookout for exciting opportunities to contribute my
            skills and passion. <br /> Feel free to reach out. Thank you for
            visiting, and I look forward to the possibility of working together
            to bring digital visions to life.
          </animated.h4>
          <button className="contact-btn" onClick={scrollToContact}>
            Contact Me
          </button>
          <button className="download-btn mt-2 mx-1" onClick={downloadPdf}>
            Download resume
          </button>
        </div>
        <div className="col-lg-6">
          <animated.img
            className="my-image img-fluid rounded-circle"
            src="images/IMG_6073.jpg"
            alt=""
            style={imageAnimation}
          />
        </div>
      </div>
    </div>
  );
};
