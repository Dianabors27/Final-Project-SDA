import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/1img.png";
import image2 from "../../assets/images/ruben2.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <div id="ui-segment" class="ui segment ">
        <img class="ui large left rounded floated image" src={image1} />
        <p>
          Numele meu este Ruben Soficaru si sunt student in anul VI la Facultatea de Arhitectura si Urbanism, Cluj.
         
        </p>
        <img class="ui medium right rounded floated image" src={image2} />
        <p>
        Mi-a placut desenul dintotdeauna, fiind atras de reprezentarea mai tehnica și de reprezentarea perspectivă.
        </p>
        <p>
        Copil fiind, rareori ți se întâmplă să ai o percepție conștientă asupra arhitecturii sau asupra construcțiilor, în general. Le identifici prin funcțiuni, vezi culorile lor și îți plac sau nu detaliile, bazat doar pe emoții și trăiri personale. Recunoști locuri, simți textura, vezi dimensiunea și te minunezi de relația lor cu spațiul parcurs. 
        </p>
        <p>
        E important să cunoști spațiul construit, nu doar din exemple prezentate în reviste sau site-uri de arhitectură ci, mai ales, prin experiența personală. Este bine să găsești mereu exemple care să te facă să înveți și să continui ceea ce faci.
        </p>
        <p>
        Am si alte pasiuni, cum ar fii calatoriile si plimbarile prin natura sau cataratul pe munti. De acolo de sus lumea se vede "cu alti ochi".
        </p>
        <p>
       Pentru detalii sau colaborari, ma puteti contacta .......
        </p>

        <Button color="light" className="d-flex text-align-center">
          <Link to="/" style={{ textDecoration: "none" }}>
            Return Home{" "}
          </Link>
        </Button>
      </div>
    </>
  );
};

export default About;
