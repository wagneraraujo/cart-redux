import { createStore, combineReducers } from "redux";

import reducerProdutos from "../store/produtos";

const rootReducers = combineReducers({
  produtos: reducerProdutos
});

export default createStore(rootReducers);
