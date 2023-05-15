import { DELETE_CLASSROOM, FETCH_CLASSROOM_LIST } from "../Contant/ActionType";

var initialState = {
  listClassrooms: [],
};

let ClassroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASSROOM_LIST:
      let listClassroomApi = action.payload;

      return { ...state, listClassrooms: listClassroomApi };

    //DELETE
    case DELETE_CLASSROOM:
      let idDelete = action.payload;
      let listClassroomDelete = state.listClassrooms;
      let  indexDelete=listClassroomDelete.findIndex((classroom) =>classroom.id === idDelete ) ;
      listClassroomDelete.splice(indexDelete,1);
      return { ...state, listClassrooms: listClassroomDelete };

    default:
      return { ...state };
  }
};

export default ClassroomReducer;
