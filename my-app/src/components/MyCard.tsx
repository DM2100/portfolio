// MyCard.tsx

import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-bootstrap/Modal";
import img1 from "../images/durak-mustafov-html.jpg";
import img2 from "../images/durak-mustafov-css.jpg";
import img3 from "../images/durak-mustafov-git.jpg";
import img4 from "../images/durak-mustafov-bootstrap.jpg";
import img5 from "../images/durak-mustafov-javascript.jpg";
import img6 from "../images/durak-mustafov-jquery-ajax.jpg";
import img7 from "../images/durak-mustafov-syntactically-awesome-style-sheets-sass.jpg";
import img8 from "../images/durak-mustafov-reactjs.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyCard: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [showHeading, setShowHeading] = useState(false);

  const handleCardButtonClick = (index: number) => {
    setCurrentImageIndex(index);
    handleShowModal();
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const settings = {
    infinite: true,
    speed: 550,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <button
        type="button"
        className="slick-arrow slick-prev"
        style={{ color: "black" }}
      >
        Previous
      </button>
    ),
    nextArrow: (
      <button
        type="button"
        className="slick-arrow slick-next"
        style={{ color: "black" }}
      >
        Next
      </button>
    ),
  };

  return (
    <div className="container mt-5" id="MyCard">
      <h1 className="text-center mt-2 achievements">Module Achievements</h1>
      <Slider {...settings} className="mt-3 custom-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className="custom-card"
            onClick={() => handleCardButtonClick(index)}
          >
            {/* Add onClick handler above */}
            <img
              src={image}
              alt={`Card ${index}`}
              className="img-fluid"
              style={{ borderRadius: "30px" }}
            />
            <div className="card-caption">
              <h5>{`Achievement ${index + 1}`}</h5>
            </div>
          </div>
        ))}
      </Slider>

      <Modal show={showModal} onHide={handleCloseModal} size="sm" centered>
        <Modal.Body>
          <img
            src={images[currentImageIndex]}
            alt={`Full Screen Image`}
            className="custom-modal-image"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyCard;
