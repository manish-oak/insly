import React from "react";
import {Modal} from 'react-bootstrap';

const ModalBox = ({children, title, show, handleClose}) => {
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
      </Modal>        
    )
}

export default ModalBox;