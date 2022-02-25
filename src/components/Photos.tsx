import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
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

  const [modalOpen, setModalOpen] = useState<null | { title: string, id: string, src: string} >(null);
  console.log(!!modalOpen);

  useEffect(() => {
    if (id) dispatch(getPhotos({ id }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                <Button onClick={() => setModalOpen({ id: ""+photo.id, title: photo.title, src: photo.url })}>Show Image</Button>
            </CardBody>
          </Card>
        ))}
      </CardGroup>
      <ModalWindow modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {/* <Routes>
        <Route path="albums/:id/photos/*" element={<div>:KJGFDGDFGDFGD</div>} />
        <Route path="albums/:id/photos/:photoId" element={<ModalWindow modalOpen={true} setModalOpen={setModalOpen} />} />
      </Routes> */}
    </>
  );
};

export default Photos;


// <Link to={`${location.pathname}/photos/${photo.id}`}>
// </Link>