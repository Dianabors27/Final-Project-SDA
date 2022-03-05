import React from "react";
import { Link } from "react-router-dom";
import { CardImg, Card, CardTitle, CardImgOverlay, Button } from "reactstrap";
import "./image.css";

const HeaderImage = () => {
  return (
    <div>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="/assets/images/idei/img.jpg"
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle id="card-title" className="card-title text-white-">
            𝐀𝐫𝐜𝐡𝐢𝐭𝐞𝐜𝐭𝐮𝐫𝐞 & 𝐈𝐧𝐭𝐞𝐫𝐢𝐨𝐫 𝐃𝐞𝐬𝐢𝐠𝐧
          </CardTitle>
          <Button className="button-title" id="button-title" color="light">
            <Link to="/about" style={{ textDecoration: "none" }}>
              {" "}
              Learn More{" "}
            </Link>
          </Button>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default HeaderImage;
