import { CLOSE_FORM, SHOW_FORM } from "../Contant/ActionType";

// Khai báo các state showForm để quản lý
var initialState = {
  showform : false,
};

// Khai báo reducer, truyền vào các state mặc định
let FormReducer = (state = initialState, action) => {
  switch (action.type) {
     case SHOW_FORM: // Xử lý Action showForm
     return {
      ...state,
      showform: true,
    };

    case CLOSE_FORM: // Xử lý Action showForm
      return {
        ...state,
        showform: false,
      };
    
    default:
      return {...state}; // Chú ý cần return về state mặc định nếu không sẽ gặp lỗi.
  }
};

export default FormReducer;

