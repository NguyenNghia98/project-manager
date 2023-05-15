import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
  } from "reactstrap";
import InputForm from './InputForm';
import "./ModalCreateNewClassroom.scss";
import { useSelector } from "react-redux";
function ModalCreateNewClassroom(props) {
    // Gọi lại các props truyền từ bên ngoài vào
    let { //showForm,
      onHandleCloseModal,onHandleCreateClassroom,listClassroom } = props;
        // Lấy giá trị State đang lưu trên Redux để sử dụng
      let stateRedux = useSelector((state) => state);
      let showForm = stateRedux.formReducer.showform;
   // Hàm xử lý khi click vào nút Cancel ở ModalCreateClassroom
   let handleCloseModal = () => {
    onHandleCloseModal();
  };

    return (
        <Container className='modal'>
        <br />
        
        <Modal isOpen= {showForm} >
          <ModalHeader >Create New Classroom</ModalHeader>
          <ModalBody>
           <InputForm onHandleCreateClassroom={onHandleCreateClassroom} listClassroom={listClassroom} />
          </ModalBody>
          <ModalFooter>
          
            <Button color="secondary" onClick={handleCloseModal} >Cancel</Button>
          </ModalFooter>
        </Modal>
      </Container>
  
    );
}

export default ModalCreateNewClassroom;