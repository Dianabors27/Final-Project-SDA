import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function ImageCard() {
  const [homeCardData, setHomeCardData] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/homeCards")
      .then((res) => {
        res.json().then((data) => {
          setHomeCardData(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center mt-3">
      {homeCardData.map((prj) => (
        <Card
          key={prj.title}
          sx={{
            maxWidth: 280,
            minWidth: 280,
            minHeight: 450,
            maxHeight: 450,
          }}
          className="m-2"
        >
          <CardMedia
            component="img"
            height="140"
            image={prj.image}
            alt="Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {prj.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ overflowY: "auto", height: "12rem" }}
            >
              {prj.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to={prj.linkToProject}>Show the project</Link>
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
