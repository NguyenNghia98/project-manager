import { api } from "./api";


// get listStudent API
const getListStudentAPI = () => {
  return api("GET", "students/", null);
};

// Add New students
const addStudentNewAPI = (StudentNew) => {
  return api("POST", "students/", StudentNew);
};

// Delete students
const deleteStudentAPI = (id) => {
  let url = "students/" + id;
  return api("DELETE", url, null);
};

// Update students
const updateStudentAPI = (studentUpdate) => {
  let url = "students/" + studentUpdate.id;
  return api("PUT", url, studentUpdate.student_Update);

};

export {
    getListStudentAPI,
    addStudentNewAPI,
    deleteStudentAPI,
    updateStudentAPI,
};


