import React from "react";
import {

    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
  } from "reactstrap";
  import UpdateForm from './UpdateForm';
import { useDispatch, useSelector } from 'react-redux';
import { actionTogleFormRedux } from './../../../Redux/Action/FormUpdateAction';

  
  function ModalUpdateClassroom(props) {
    let { onHandleCloseModalfromUpdate,onHandleCreateEdit } = props;
      // Lấy các State từ Redux
    let dispatchRedux = useDispatch();
    let stateRedux = useSelector((state)=>state.formUpdate)
let isOpen = stateRedux.isShowFormUpdate;
//HÀM xử lý khi nhấn nút close
    let handleCloseModalfromUpdate =()=>{
      dispatchRedux(actionTogleFormRedux());
    };
    return (
        <Container className='modal'>
        <br />
        
        <Modal isOpen= {isOpen} >
          <ModalHeader >Create New Classroom</ModalHeader>
          <ModalBody>
      <UpdateForm onHandleCreateEdit={onHandleCreateEdit} />
          </ModalBody>
          <ModalFooter>
          
            <Button color="outlined" onClick={handleCloseModalfromUpdate} >Cancel</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
  
  export default ModalUpdateClassroom;