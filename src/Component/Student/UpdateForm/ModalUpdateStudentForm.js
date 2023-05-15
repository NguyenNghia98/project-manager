import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import UpdateFormStudent from "./UpdateFormStudent";
import { actionTogleFormRedux } from './../../../Redux/Action/FormUpdateAction';

// gọi lại các modal từ bên ngoiaf truyền vào

function ModalUpdateStudentForm(props) {
  let { onHandleUpdate} = props;
  // Lấy giá trị State đang lưu trên Redux để sử dụng
let dispathRedux = useDispatch();
  // Lấy các State từ Redux
let stateRedux = useSelector((state)=> state.formUpdate);

let isOpen = stateRedux.isShowFormUpdate; 
//hàm close
let handleCloseEdit=()=>{
dispathRedux(actionTogleFormRedux());
};
  return (
    <Container className="modal">
      <br />

      <Modal isOpen={isOpen}>
        <ModalHeader> Update New Student </ModalHeader>
        <ModalBody>
          <UpdateFormStudent onHandleUpdate={onHandleUpdate} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleCloseEdit}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalUpdateStudentForm;
