import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./styles/modal.styles.css"

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

        const handleClose = () => setShowModal(false);
        const handleShow = () => setShowModal(true);
    return(
       
       

      <Modal show={showModal} onHide={handleClose} className="modalContainer">
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        
      </Modal>
        
    )
}

export default ModalPopUp
