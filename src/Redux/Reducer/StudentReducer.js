import { DELETE_STUDENT, FETCH_STUDENT_LIST } from "../Contant/ActionType";

var initialState = {
  listStudents:[],
};

const StudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENT_LIST:
      let listStudentApi = action.payload;

      // state = action.payload;
      return {...state,listStudents:listStudentApi};
      case DELETE_STUDENT:
        let idDelete = action.payload;
        let listStudentDelete = state.listStudents;
        let indexDelete =listStudentDelete.findIndex((student) =>student.id === idDelete ) ;
        listStudentDelete.splice(indexDelete,1);
        return { ...state, listStudents: listStudentDelete };
  
    default:
      return {...state};
  }
};

export default StudentReducer;
