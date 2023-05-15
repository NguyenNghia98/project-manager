import {
  FETCH_CLASSROOM_UPDATE_INFO,
  FETCH_STUDENT_UPDATE_INFO,
  TOGLE_FORM_UPATE,
} from "../Contant/ActionType";

// Chuyển đổi trạng thái đóng mở của Account
export const actionTogleFormRedux = () => {
  return {
    type: TOGLE_FORM_UPATE,
  };
};

// Lưu thông tin của Classroom Update lên redux
export const actionFetchClassroomUpdateInfoRedux = (classroomUpdate) => {
  console.log("classroomUpdate", classroomUpdate);
  return {
    type: FETCH_CLASSROOM_UPDATE_INFO,
    payload: classroomUpdate,
  };
};
// Lưu thông tin của Student Update lên redux
export const actionFetchStudentUpdateInfoRedux = (studentUpdate) => {
  return {
    type: FETCH_STUDENT_UPDATE_INFO,
    payload: studentUpdate,
  };
};
