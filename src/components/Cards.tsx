import React from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import './Albums.css';

const Cards = () => {
  return (
    <CardGroup>
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <Button>Show Image</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default Cards;
