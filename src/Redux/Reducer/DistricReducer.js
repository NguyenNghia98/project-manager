import { FETCH_DISTRIC_LIST } from "../Contant/ActionType";


var initialState = {
  listDistric:[],
};

const DistricReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISTRIC_LIST:
   let listDistricApi = action.payload;

   
      return {...state,listDistric:listDistricApi};

    default:
      return {...state};
  }
};

export default DistricReducer;
