import React from "react";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
import { FaFacebook} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="main-footer bg-footerColor">
      <div className="container">
        <div>
          <h4 className="text-light">Architect</h4>
          <span>"The starting point for all achievement is desire."</span>
          <p>Napoleon Hill</p>
        </div>
        {/* Footer Bottom*/}
        <div className="footer-bottom">
          {/* <FacebookIcon fontSize="large" />
          <InstagramIcon fontSize="large" /> */}
          <ul className="d-flex justify-content-center">
            <li>
                  <a target="_blank" href="https://www.facebook.com/ruben.soficaru">
                    <FaFacebook size={"40px"} color="#21252" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/ruben_soficaru/">
                    <FaInstagram size={"40px"} color="#8E2F5C" />
                  </a>
                </li>
                </ul>
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Architect App - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

