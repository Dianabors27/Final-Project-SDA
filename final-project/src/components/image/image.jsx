import React from "react";
import { Link } from "react-router-dom";
import { CardImg, Card, CardTitle, CardImgOverlay, Button} from "reactstrap";
import "./image.css";

const HeaderImage = () => {
    return(
        <div>
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="/assets/images/idei/second.jpg"
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle className="card-title text-dark" tag="h2">
        Architect & Interior Design
      </CardTitle>
      <Button className="button-title" id="button-title"
    color="light" 
  >
   <Link to="/about" style={{textDecoration:"none"}}> Learn More </Link>
  </Button>
    </CardImgOverlay>
  </Card>
</div>
    )
};

export default HeaderImage;