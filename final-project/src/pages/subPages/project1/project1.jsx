import React, { useState, useEffect } from "react";
import CustomCarousel from "../../../components/carousel1/carousel1";

const Project1 = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/ImobilCluj")
      .then((res) => {
        res.json().then((data) => {
          setProjectData(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <CustomCarousel carouselData={projectData} />
    </>
  );
};

export default Project1;
