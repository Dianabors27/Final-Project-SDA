import React from "react";
import { Carousel } from "react-bootstrap";

const CustonCarousel = (props) => {
  console.log(props.carouselData);
  return (
    <Carousel>
      {props.carouselData.map((elem) => (
        <Carousel.Item key={elem.title}>
          <img
            className="d-block w-75 mx-auto"
            src={elem.fotoPath}
            alt="First slide"
          />
          <Carousel.Caption>
            {elem.title && <h3>{elem.title}</h3>}
            <p>{elem.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustonCarousel;
