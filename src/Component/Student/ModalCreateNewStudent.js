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
import { useSelector } from 'react-redux';

  // gọi lại các modal từ bên ngoiaf truyền vào
 
  function ModalCreateNewStudent(props) {
    let {handleClose,onHandleCreate} = props;
      // Lấy giá trị State đang lưu trên Redux để sử dụng
      let stateRedux = useSelector((state)=>state);
      let showForm = stateRedux.formReducer.showform;
    return (
      <Container className='modal'>
        <br />
        
        <Modal isOpen= {showForm} >
          <ModalHeader> Create New Classroom </ModalHeader>
          <ModalBody>
           <InputForm onHandleCreate={onHandleCreate} 
          //  listGender={listGender} listDistric={listDistric}
            />
          </ModalBody>
          <ModalFooter>
          
            <Button color="secondary" onClick={handleClose} >Cancel</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
  
  export default ModalCreateNewStudent;

