import { addStudentNewAPI, deleteStudentAPI, getListStudentAPI, updateStudentAPI } from "../../API/StudentApi";
import { DELETE_STUDENT, FETCH_STUDENT_LIST } from './../Contant/ActionType';

// Viết các Action liên quan đến Call API
export const actionFetchListStudentAPI = () => {
  return (dispatch) => {
    return getListStudentAPI().then((listStudentAPI) => {
      //  console.log("reponseAPI:", response);
      dispatch(actionFetchListStudentRedux(listStudentAPI));
    });
  };
};

export const actionFetchListStudentRedux = (listStudent) => {
  return {
    type: FETCH_STUDENT_LIST,
    payload: listStudent,
  };
};

// Acction thêm mới Student
export const actionAddStudentAPI = (StudentNew) => {
  return (dispatch) => {
    return addStudentNewAPI(StudentNew).then((response) => {
      dispatch(actionFetchListStudentAPI());
    });
  };
};

// Acction xóa Account
export const actionDeleteStudentAPI = (id) => {
  return (dispatch) => {
    return deleteStudentAPI(id).then((response) => {
      // console.log("response sau khi xóa Account: ", response);
      dispatch(actionFetchListStudentAPI());
   
    });
  };
};

// export const actionDeleteStudentRedux = (idDelete) => {
//   return {
//     type: DELETE_STUDENT,
//     payload: idDelete,
//   };
// };
// Không sử dụng thunk ở đây do không cần thiết
export const actionUpdateStudentAPI = (studentUpdate_API) => {
  return (dispatch) => {
    return updateStudentAPI(studentUpdate_API).then((response) => {

    });
  };
};
