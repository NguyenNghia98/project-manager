import { FETCH_CLASSROOM_UPDATE_INFO, TOGLE_FORM_UPATE } from "../Contant/ActionType";
import { FETCH_STUDENT_UPDATE_INFO } from './../Contant/ActionType';

var initialState = {
    isShowFormUpdate: false,
    classroomUpdateInfo: {},
    studentUpdateInfo: {},

  };
  

  const FormUpdate = (state = initialState, action) => {
    
    switch (action.type) {
      case TOGLE_FORM_UPATE:
        return {
          ...state,
          isShowFormUpdate: !state.isShowFormUpdate,
        };
      case FETCH_CLASSROOM_UPDATE_INFO:
        return {
          ...state,
          classroomUpdateInfo: action.payload,
        };
        case FETCH_STUDENT_UPDATE_INFO:
          return {
            ...state,
            studentUpdateInfo: action.payload,
            
          };
  

      default:
        return { ...state };
    }

  };
  
  export default FormUpdate;
  
  