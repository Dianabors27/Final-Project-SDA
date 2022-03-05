import React from "react";
import { Carousel } from "react-bootstrap";
import "./carousel1.css";

const CustomCarousel = (props) => {
  return (
    <>
      {props.carouselTitle.map((element) => (
        <div key={element.id}>
          <h1 className="text-center">{element.title}</h1>
          <p className=" text-center ">{element.description}</p>
        </div>
      ))}

      <Carousel>
        {props.carouselData.map((elem) => (
          <Carousel.Item key={elem.title}>
            <img
              className="d-block w-100 mx-auto"
              src={elem.fotoPath}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default CustomCarousel;
