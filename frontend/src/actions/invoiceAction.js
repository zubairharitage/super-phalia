import axios from "axios";

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

export const getAllBillsAction = () => async (dispatch) => {
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

export const createBillAction = (bill) => async (dispatch) => {
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

export const deleteBillAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BILL_REQUEST });

    const { data } = await axios.delete(`/phalia/api/v1/bill/${id}`);
    dispatch({
      type: DELETE_BILL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: DELETE_BILL_FAIL, payload: error.responce.data.messsage });
  }
};

export const billDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DETAIL_BILL_REQUEST });

    const { data } = await axios.get(`/phalia/api/v1/bill/${id}`);
    dispatch({
      type: DETAIL_BILL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: DETAIL_BILL_FAIL, payload: error.responce.data.messsage });
  }
};
