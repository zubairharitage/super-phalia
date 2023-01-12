import axios from "axios";

import {
  ALL_BILL_REQUEST,
  ALL_BILL_SUCCESS,
  ALL_BILL_FAIL,
  CREATE_BILL_REQUEST,
  CREATE_BILL_SUCCESS,
  CREATE_BILL_FAIL,
} from "../constants/invoiceConstants";

export const getAllBills = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BILL_REQUEST });

    const { data } = await axios.get("/phalia/api/v1/bills");
    dispatch({
      type: ALL_BILL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: ALL_BILL_FAIL, payload: error.responce.data.messsage });
  }
};

export const createBill = (bill) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BILL_REQUEST });

    const { data } = await axios.post("/phalia/api/v1/bill/new", bill);
    dispatch({
      type: CREATE_BILL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: CREATE_BILL_FAIL, payload: error.responce.data.messsage });
  }
};
