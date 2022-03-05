import React, { useState, useEffect } from "react";
import CustomCarousel from "../../../components/carousel1/carousel1";

const Project5 = () => {
  const [projectData, setProjectData] = useState([]);
  const [projectTitle, setProjectTitle] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/BlocuriSibiu")
      .then((res) => {
        res.json().then((data) => {
          setProjectData(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/TitleProjectBlocuriSibiu")
      .then((res) => {
        res.json().then((data) => {
          setProjectTitle(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <CustomCarousel carouselData={projectData} carouselTitle={projectTitle} />
    </>
  );
};

export default Project5;