import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

interface ModalProps {
  title?: string,
  id?: string,
  src?: string,
  modalOpen: null | { title: string, id: string, src: string},
  setModalOpen: (modal: null | { title: string, id: string, src: string}) => void;
};

const ModalWindow = ({ modalOpen, setModalOpen, title, id, src }: ModalProps) => {

const goBack = () => {
  setModalOpen(null);
}

  return (<>
      <Modal isOpen={!!modalOpen} fullscreen="lg" toggle={() => setModalOpen(null)}>
        <ModalHeader toggle={goBack}>{title}</ModalHeader>
        <ModalBody><img src={src} alt="" /></ModalBody>
        <ModalFooter>
          <Button onClick={goBack}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalWindow;
