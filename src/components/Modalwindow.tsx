import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import "./Modalwindow.css";

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
      <Modal isOpen={!!modalOpen} toggle={goBack} fullscreen={true}>
        <ModalHeader toggle={goBack}>{modalOpen?.title}</ModalHeader>
       {modalOpen && <ModalBody><img src={modalOpen.src} alt="" /></ModalBody>}
        <ModalFooter>
          <Button onClick={goBack}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalWindow;
