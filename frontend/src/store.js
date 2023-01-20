import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  createInvoiceReducer,
  deleteInvoiceReducer,
  getAllInvoiceReducer,
  invoiceDetailReducer,
  invoiceEditReducer,
} from "./reducers/invoiceReducer";

const reducer = combineReducers({
  invoices: getAllInvoiceReducer,
  createInvoice: createInvoiceReducer,
  deleteInvoice: deleteInvoiceReducer,
  InvoiceDetail: invoiceDetailReducer,
  editInvoice: invoiceEditReducer,
});

const midleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...midleware))
);

export default store;
