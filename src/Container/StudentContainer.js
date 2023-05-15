import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Component/Student/CreateButton";
import ResultForm from "../Component/Student/ResultForm";
import ModalCreateNewStudent from "./../Component/Student/ModalCreateNewStudent";
import { useDispatch,useSelector  } from "react-redux";
import { closeFormAction, showFormAction } from "../Redux/Action/FormAction";
import {
  actionDeleteStudentAPI,
  actionFetchListStudentAPI,
  actionUpdateStudentAPI,
} from "../Redux/Action/StudentAction";

// import { addStudentNewAPI } from "../API/StudentApi";
import { actionFetchListDistricAPI } from "./../Redux/Action/DistricAction";
import { actionFetchListGenderAPI } from "./../Redux/Action/GenderAction";
import { actionAddStudentAPI } from "./../Redux/Action/StudentAction";
import { deleteStudentAPI } from "../API/StudentApi";
import ModalUpdateStudentForm from "../Component/Student/UpdateForm/ModalUpdateStudentForm";
import { actionFetchStudentUpdateInfoRedux } from "../Redux/Action/FormUpdateAction";
import { actionTogleFormRedux } from "./../Redux/Action/FormUpdateAction";
function StudentContainer(props) {
  let dispatchRedux = useDispatch();
  let stateRedux = useSelector((state)=>state);
  let onHandleCreateStudent = () => {
    dispatchRedux(showFormAction());
  };
  // khai báo hàm đóng modal create form
  let handleClose = () => {
    dispatchRedux(closeFormAction());
  };

  let onHandleCreate = (studentNew) => {
    let studentNew_Api = {
      gmail: studentNew.gmail,
      username: studentNew.username,
      phonenumber: studentNew.phonenumber,
      fullname: studentNew.fullname,
      genderId: studentNew.gender,
      dicstricId: studentNew.dicstric,
    };
    // addStudentNewAPI(studentNew_Api).then((respone) => {});
    // dispatchRedux(closeFormAction());
    dispatchRedux(actionAddStudentAPI(studentNew_Api));
    // dispatchRedux(actionFetchListStudentAPI());
    dispatchRedux(closeFormAction());
  };
  //Hàm xóa
  let onHandleDelete = (studentId) => {

    dispatchRedux(actionDeleteStudentAPI(studentId));
    console.log("studentId",studentId);
  };
  //hàm open button edit
  let onHandleEditButton = (studentEdit) => {

    // Lưu thông tin Account cần Update vào Redux
    dispatchRedux(actionFetchStudentUpdateInfoRedux(studentEdit));
    // Mở UpdateForm
    dispatchRedux(actionTogleFormRedux());
  };
  //khi nhấn nút update
  let onHandleUpdate = async (studentUpdateForm) => {
    console.log("studentUpdateForm",studentUpdateForm);

    let id_Update = stateRedux.formUpdate.studentUpdateInfo.id;
    console.log("studentUpdateInfo.id",stateRedux.formUpdate.studentUpdateInfo.id);
    let studentUpdate_Api = {
      id: id_Update,
      student_Update: studentUpdateForm,
      
    };
    console.log("id_Update",id_Update);
    console.log("student_Update",studentUpdateForm);
    // Gọi API để Update Student
    await dispatchRedux(actionUpdateStudentAPI(studentUpdate_Api));
console.log("studentUpdate_Api",studentUpdate_Api);
    //Đóng form update
    await dispatchRedux(actionTogleFormRedux());
    // Gọi API để cập nhật lại ResultForm
    await dispatchRedux(actionFetchListStudentAPI());

  };
  useEffect(() => {
    // fetchListStudent();
    dispatchRedux(actionFetchListStudentAPI());
    dispatchRedux(actionFetchListDistricAPI());
    dispatchRedux(actionFetchListGenderAPI());
    // fetchLisDistric();
    // fetchLisGender();
  }, []);

  return (
    <Container>
      <div className="button">
        <CreateButton onHandleCreateStudent={onHandleCreateStudent} />
      </div>
      <br />

      <ModalCreateNewStudent
        //  showForm={showForm}
        handleClose={handleClose}
        onHandleCreate={onHandleCreate}
        // listGender={listGender}
        // listDistric={listDistric}
      />
      <ModalUpdateStudentForm onHandleUpdate={onHandleUpdate} />
      <ResultForm
        onHandleDelete={onHandleDelete}
        onHandleEditButton={onHandleEditButton}
      />
    </Container>
  );
}

export default StudentContainer;
