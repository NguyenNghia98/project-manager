
import { CLOSE_FORM, SHOW_FORM } from './../Contant/ActionType';
// action dùng mở Modal InputForm
export const showFormAction = () => {
    return {
      type: SHOW_FORM, //
    };
  };
  
  // action dùng đóng Modal InputForm
  export const closeFormAction = () => {
    return {
      type: CLOSE_FORM,
    };
  };
  