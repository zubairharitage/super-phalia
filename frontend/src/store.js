import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  createInvoiceReducer,
  getAllInvoiceReducer,
} from "./reducers/invoiceReducer";

const reducer = combineReducers({
  invoices: getAllInvoiceReducer,
  createInvoice: createInvoiceReducer,
});

const midleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...midleware))
);

export default store;
