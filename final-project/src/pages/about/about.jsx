import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="ui segment bg-dark text-light">
        <img
          className="ui centered medium image"
          src="/assets/images/idei/about.jpg"
        />
        <p>
          Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
          alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
          referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
          electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
          Mei ex natum rebum iisque.
        </p>
        <p>
          Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
          definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his
          te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo
          vide phaedrum, vim vivendum maiestatis in.
        </p>
        <img
          className="ui small centered image"
          src="/assets/images/idei/about.jpg"
        />
        <p>
          Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.
          Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute
          at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi
          te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
          convenire mnesarchum eu per, quas minimum postulant per id.
        </p>
     
          <Button color="light" className="d-flex text-align-center">
   <Link to="/" style={{textDecoration:"none"}}> Home </Link>
  </Button>
  </div>
    </>
    
  );
};

export default About;
