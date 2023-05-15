import { FETCH_GENDER_LIST } from "../Contant/ActionType";

var initialState = {
  listGender:[],
};

const GenderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENDER_LIST:
   let listGenderApi = action.payload;

   
      return {...state,listGender:listGenderApi};

    default:
      return {...state};
  }
};

export default GenderReducer;


