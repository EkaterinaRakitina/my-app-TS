import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAlbums, getAlbums, Album } from "../app/albumSlice";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import "./Albums.css";
import { RootState } from "../app/store";

const Albums: React.FC = () => {
  const dispatch = useDispatch();
  const albums = useSelector<RootState, Album[]>(selectAlbums);

  // console.log(albums);

  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);

  return (
    <CardGroup>
      {albums.map((album: Album, i: number) => (
        <Card key={album.id}>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">{`Album ${i + 1}`}</CardTitle>
            <CardText>{album.title}</CardText>
            <Link to={`/albums/${album.id}/photos`}>
              <Button>Go to Album</Button>
            </Link>
          </CardBody>
        </Card>
      ))}
    </CardGroup>
  );
};

export default Albums;