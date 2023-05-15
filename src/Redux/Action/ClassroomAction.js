import {
  addClassroomNewAPI,
  deleteClassroomAPI,
  getListClassroomAPI,
  updateClassroomAPI,
} from "../../API/ClassroomApi";
import {
  DELETE_CLASSROOM,
  FETCH_CLASSROOM_LIST,
} from "./../Contant/ActionType";

// Viết các Action liên quan đến Call API
export let actionFetchListClassroomAPI = () => {
  return (dispath) => {
    return getListClassroomAPI().then((listClassroomAPI) => {
      dispath(actionFetchListClassRoomRedux(listClassroomAPI));
    });
  };
};
export const actionFetchListClassRoomRedux = (listClassroomInput) => {
  return {
    type: FETCH_CLASSROOM_LIST,
    payload: listClassroomInput,
  };
};
export const actionDeleteClassroomAPI = (idDelete) => {
  return (dispatch) => {
    return deleteClassroomAPI(idDelete).then((res) => {
      // console.log("response sau khi xóa Account: ", response);
      dispatch(
        actionFetchListClassroomAPI()

      );
    });
  };
};
// let actionDeleteClassroomRedux = (idDelete) => {
//   return {
//     type: DELETE_CLASSROOM,
//     payload: idDelete,
//   };
// };
// Acction Update Account

export const actionUpdateClassroomAPI = (classroomUpdate_API) => {
  return (dispatch) => {
    return updateClassroomAPI(classroomUpdate_API).then((response) => {
      // console.log("response sau khi xóa Account: ", response);
    });
  };
};
//Action thêm  Classroom

export let actionAddClassroomAPI = (classroomNew) => {
  return (dispath) => {
    return addClassroomNewAPI(classroomNew).then((res) => {
      dispath(actionFetchListClassroomAPI());
    });
  };
};
