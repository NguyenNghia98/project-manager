import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Component/Classroom/CreateButton";
import ModalCreateNewClassroom from "../Component/Classroom/ModalCreateNewClassroom";
import ResultForm from "../Component/Classroom/ResultForm";
import "./Classroom.scss";
import Axios from "axios";
import { addClassroomNewAPI, getListClassroomAPI } from "../API/ClassroomApi";
import { useDispatch, useSelector } from "react-redux";
import { closeFormAction, showFormAction } from "./../Redux/Action/FormAction";
import {
  actionAddClassroomAPI,
  actionDeleteClassroomAPI,
  actionFetchListClassroomAPI,
  actionUpdateClassroomAPI,
} from "./../Redux/Action/ClassroomAction";
import ModalUpdateClassroom from "../Component/Classroom/UpdateClassroom/ModalUpdateClassroom";
import {
  actionFetchClassroomUpdateInfoRedux,
  actionTogleFormRedux,
} from "../Redux/Action/FormUpdateAction";
import { actionFetchListLevelAPI } from "./../Redux/Action/LevelAction";

function ClassroomContainer(props) {
  // Khai báo hook để dispach Action
  let dispatchRedux = useDispatch();

  // Hàm Callback xử lý khi nhấn nút CreateNewAccount
  let onHandleCreateNewClassroom = () => {
    dispatchRedux(showFormAction());
  };
  // Hàm Callback xử lý khi nhấn nút Cancel tại ModalCreateForm
  let onHandleCloseModal = () => {
    // console.log("click!!");
    // setShowForm(false);
    dispatchRedux(closeFormAction());
  };
  // Khai báo hook để lấy State từ Redux
  let stateRedux = useSelector((state) => state);
  // Hàm Callback xử lý khi nhấn nút Create ở InputForm
  let onHandleCreateClassroom = (classroomNew) => {
    let classroomNew_API = {
      levelId: classroomNew.level,
      totalMembers: classroomNew.totalMembers,
      teacher: classroomNew.teacher,
      moreInfomation: classroomNew.moreInfomation,
      description: classroomNew.description,
    };
    console.log("classroomNew",classroomNew);
    //gọi hàm call API
    // addClassroomNewAPI(classroomNew_API).then((respone) => {});
    dispatchRedux(actionAddClassroomAPI(classroomNew_API));
    console.log("classroomNew1",classroomNew_API);

    dispatchRedux(closeFormAction());
  };
  // Khai baoas callback handleDelete
  let onHandleDelete = (classroomid) => {
    dispatchRedux(actionDeleteClassroomAPI(classroomid));

  };
  // Khai báo khi nhấn vào nút update
  let onHandleCloseModalfromUpdate = () => {};
  //Khai báo onpenEDit
  let onHandleOpenEdit = (ClassroomUpdate) => {


    dispatchRedux(actionFetchClassroomUpdateInfoRedux(ClassroomUpdate));


    // Mở UpdateForm
    dispatchRedux(actionTogleFormRedux());
  };
  //Khai báo khi nhấn vào nút EDIT ở EDIT form
  let onHandleCreateEdit = async (classroomUpdateForm) => {
    // Lấy của Clasroom Cần update từ Redux
    let id_Update = stateRedux.formUpdate.classroomUpdateInfo.id;

    let classroomUpdate_API = {
      id: id_Update,
      classroom_Update: classroomUpdateForm,
    };

    //Gọi API để update Classroom
    await dispatchRedux(actionUpdateClassroomAPI(classroomUpdate_API));
    //đóng form Input
    await dispatchRedux(actionTogleFormRedux());
    // gọi api để cập nhật resultform
    await dispatchRedux(actionFetchListClassroomAPI());
  };
  // Khai báo useEffect
  useEffect(() => {
    dispatchRedux(actionFetchListClassroomAPI());
    dispatchRedux(actionFetchListLevelAPI());
  }, []);

  return (
    <Container>
      <div className="button">
        <CreateButton onHandleCreateNewClassroom={onHandleCreateNewClassroom} />
      </div>
      <ModalCreateNewClassroom //showForm={showForm}
        onHandleCloseModal={onHandleCloseModal}
        onHandleCreateClassroom={onHandleCreateClassroom}
        //  listClassroom={listClassroom}
      />

      <br />
      <ResultForm
        onHandleDelete={onHandleDelete}
        onHandleOpenEdit={onHandleOpenEdit}
      />
      <ModalUpdateClassroom
        onHandleCloseModalfromUpdate={onHandleCloseModalfromUpdate}
        onHandleCreateEdit={onHandleCreateEdit}
      />
    </Container>
  );
}

export default ClassroomContainer;
