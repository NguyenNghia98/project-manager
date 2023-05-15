import { getListLevelAPI } from "../../API/LevelApi";
import { FETCH_LEVEL_LIST } from "../Contant/ActionType";



// Viết các Action liên quan đến Call API
export const actionFetchListLevelAPI = () => {
  return (dispatch) => {
    return getListLevelAPI().then((response) => {
      //  console.log("reponseAPI:", response);
      dispatch(actionFetchListLevelRedux(response));
    });
  };
};

export const actionFetchListLevelRedux = (listLevel) => {
  return {
    type: FETCH_LEVEL_LIST,
    payload: listLevel,
  };
};


