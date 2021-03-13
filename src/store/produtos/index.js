import Produtos from "../../services/data";

function reducer(state = [Produtos][0], action) {
  if (action.type === "ADD_PRODUTO") {
    //retornar o novo estado com o estado atual
    return [...state, action.produtos];
  }
  return state;
}
export default reducer;

export const addProduto = produto => {
  return {
    //por obrigacao tem q ter um tipo e valor
    type: "ADD_PRODUTO",
    produto
  };
};
