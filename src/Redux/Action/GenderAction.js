import { getListGenderAPI } from "../../API/GenderApi";
import { FETCH_GENDER_LIST } from "../Contant/ActionType";

// Viết các Action liên quan đến Call API
export const actionFetchListGenderAPI = () => {
  return (dispatch) => {
    return getListGenderAPI().then((response) => {
      //  console.log("reponseAPI:", response);
      dispatch(actionFetchListGenderRedux(response));
    });
  };
};

export const actionFetchListGenderRedux = (listGender) => {
  return {
    type: FETCH_GENDER_LIST,
    payload: listGender,
  };
};


