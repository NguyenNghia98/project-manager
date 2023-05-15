import { FETCH_LEVEL_LIST } from "../Contant/ActionType";


var initialState = {
  listLevel:[],
};

const LevelReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEVEL_LIST:
   let listLevelApi = action.payload;

   
      return {...state,listLevel:listLevelApi};

    default:
      return {...state};
  }
};

export default LevelReducer;



