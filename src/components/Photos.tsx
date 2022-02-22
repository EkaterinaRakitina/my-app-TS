import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import { selectPhotos, getPhotos, Photo } from "../app/photoSlice";
import ModalWindow from "./Modalwindow";
import { RootState } from "../app/store";
import "./Photos.css";

const Photos: React.FC = () => {
  const dispatch = useDispatch();
  const photos = useSelector<RootState, Photo[]>(selectPhotos);
  console.log(photos);

  const { id } = useParams<{ id: string }>();
  console.log(useParams());

  const [modal, setModal] = React.useState(false);

  useEffect(() => {
    // @ts-ignore
    dispatch(getPhotos(id));
  }, [dispatch, id]);

  return (
    <>
      <CardGroup>
        {photos.map((photo: Photo) => (
          <Card key={photo.id}>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">{photo.title}</CardTitle>
              <Link to={`/photos/${photo.id}/modal`}>
                <Button>Show Image</Button>
              </Link>
            </CardBody>
          </Card>
        ))}
      </CardGroup>
      <Routes>
        <Route path="/photos/:id/modal" element={<ModalWindow />} />
      </Routes>
    </>
  );
};

export default Photos;
