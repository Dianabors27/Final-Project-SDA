import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
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
          <FacebookIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Architect App - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
