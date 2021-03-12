import { createStore } from "redux";
import Produtos from "../services/data";

function reducer(state = [Produtos][0], action) {
  return state;
}

export default createStore(reducer);
