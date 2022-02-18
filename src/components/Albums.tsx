import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAlbums } from "../app/albumSlice"; 
import { getAlbums } from "../app/albumSlice";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import './Albums.css';

const Albums: React.FC = () => {
  const dispatch = useDispatch();
  const albums = useSelector(selectAlbums);
  console.log(albums);

  useEffect(()=> {
    dispatch(getAlbums());
  }, [])
  

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
          <CardTitle tag="h5">Album1</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Album subtitle
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Button>Go to Album</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default Albums;
