import { createStore, combineReducers } from "redux";

import reducerProdutos from "../store/produtos";
import layoutReducer from "./layout";

const rootReducers = combineReducers({
  produtos: reducerProdutos,
  layout: layoutReducer
});

export default createStore(rootReducers);
