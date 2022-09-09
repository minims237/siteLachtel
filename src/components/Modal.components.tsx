import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";


const ModalPopUp=(props:any)=>{
    const [showModal, setShowModal] = useState(props.visible);
    useEffect(() => {
        toggleModal();
      }, [props.visible]);
      const toggleModal = () => {
        if (props.visible) {
          setShowModal(true);
          }
        else {
        setShowModal(false) 
          }
        }
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return(
        <div>
            <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default ModalPopUp