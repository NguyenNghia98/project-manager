import { api } from "./api";

// get listClassroom API
const getListClassroomAPI = () => {
  return api("GET", "classrooms/", null);
};

// Add New Account
const addClassroomNewAPI = (ClassroomNew) => {
  return api("POST", "classrooms/", ClassroomNew);
};

// Delete Account
const deleteClassroomAPI = (id) => {
  let url = "classrooms/" + id;
  return api("DELETE", url, null);
};

// Update Account
const updateClassroomAPI = (classroomUpdate) => {
  let url = "classrooms/" + classroomUpdate.id;
  return api("PUT", url, classroomUpdate.classroom_Update);
};
export {
    getListClassroomAPI,
    addClassroomNewAPI,
    deleteClassroomAPI,
    updateClassroomAPI,
};


