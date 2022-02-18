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
  CardText,
  Button,
} from "reactstrap";
import './Albums.css';

const Albums: React.FC = () => {
  const dispatch = useDispatch();
  const {albums} = useSelector(selectAlbums);
  
  console.log(albums);
  

  useEffect(()=> {
    dispatch(getAlbums());
  }, [])

  return (
    <CardGroup>
      {albums.map((v: any, i: number)=> (
        <Card key={v.id}>
         <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">{`Album ${i + 1}`}</CardTitle>
            <CardText>
              {v.title}
            </CardText>
            <Button>Go to Album</Button>
          </CardBody>
        </Card>
      ))}
    </CardGroup>
  );
};

export default Albums;
