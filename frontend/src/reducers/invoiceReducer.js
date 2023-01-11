import {
  ALL_BILL_REQUEST,
  ALL_BILL_SUCCESS,
  ALL_BILL_FAIL,
} from "../constants/invoiceConstants";

const invoiceReducer = (state = { bills: [] }, action) => {
  switch (action.type) {
    case ALL_BILL_REQUEST:
      return {
        loading: true,
        bills: [],
      };
    case ALL_BILL_SUCCESS:
      return {
        loading: false,
        bills: action.payload.bills,
        billsCount: action.payload.billsCount,
      };
    case ALL_BILL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default invoiceReducer;
