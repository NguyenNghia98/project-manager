import { getListDistricAPI } from "../../API/DistricApi";
import { FETCH_DISTRIC_LIST } from './../Contant/ActionType';


// Viết các Action liên quan đến Call API
export const actionFetchListDistricAPI = () => {
  return (dispatch) => {
    return getListDistricAPI().then((response) => {
      //  console.log("reponseAPI:", response);
      dispatch(actionFetchListDistricRedux(response));
    });
  };
};

export const actionFetchListDistricRedux = (listDistric) => {
  return {
    type: FETCH_DISTRIC_LIST,
    payload: listDistric,
  };
};


