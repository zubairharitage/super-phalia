import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import invoiceReducer from "./reducers/invoiceReducer";

const reducer = combineReducers({
  invoices: invoiceReducer,
});

const midleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...midleware))
);

export default store;
