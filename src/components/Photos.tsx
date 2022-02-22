import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Modal,
} from "reactstrap";
import { selectPhotos, getPhotos, Photo } from "../app/photoSlice";
import { RootState } from "../app/store";
import './Photos.css';

const Photos: React.FC = () => {
  const dispatch = useDispatch();
  const photos = useSelector<RootState, Photo[]>(selectPhotos);
  console.log(photos);

  const { id } = useParams<{ id: string }>();
  console.log(useParams());
  


  useEffect(() => {
    // @ts-ignore
    dispatch(getPhotos(id))
  }, [id]);

  return (<>
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
            <Button>Show Image</Button>
          </CardBody>
        </Card>
  ))}
    </CardGroup>
    {/* <Router>
      <Route path="/photos/:photoId" element={<Modal />} />
    </Router> */}
    </>);
};

export default Photos;
