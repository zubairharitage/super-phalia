import {
  ALL_BILL_REQUEST,
  ALL_BILL_SUCCESS,
  ALL_BILL_FAIL,
  CREATE_BILL_REQUEST,
  CREATE_BILL_SUCCESS,
  CREATE_BILL_FAIL,
  DELETE_BILL_REQUEST,
  DELETE_BILL_SUCCESS,
  DELETE_BILL_FAIL,
  DETAIL_BILL_REQUEST,
  DETAIL_BILL_SUCCESS,
  DETAIL_BILL_FAIL,
} from "../constants/invoiceConstants";

export const getAllInvoiceReducer = (state = { bills: [] }, action) => {
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
        billCount: action.payload.billCount,
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

export const createInvoiceReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BILL_REQUEST:
      return {
        loading: true,
      };
    case CREATE_BILL_SUCCESS:
      return {
        loading: false,
        bill: action.payload.bill,
      };
    case CREATE_BILL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteInvoiceReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BILL_REQUEST:
      return {
        loading: true,
      };
    case DELETE_BILL_SUCCESS:
      return {
        loading: false,
        bill: action.payload.message,
      };
    case DELETE_BILL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const invoiceDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case DETAIL_BILL_REQUEST:
      return {
        loading: true,
      };
    case DETAIL_BILL_SUCCESS:
      return {
        loading: false,
        bill: action.payload.bill,
      };
    case DETAIL_BILL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
