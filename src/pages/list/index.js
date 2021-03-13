import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const List = () => {
  const [produtos, setProdutos] = useState([]);

  const Produtos = useSelector(state => state.produtos);
  console.log(Produtos);

  return (
    <>
      produtos lista
      {/* {Produtos.map((item, index) => { */}
      {/*   return ( */}
      {/*     <div className="col-md-3 col-sm-4 mt-3" key={item.index}> */}
      {/*       <div> </div> */}
      {/*       <h5>{item[0].name}</h5> */}
      {/*       <h6>R$ {item[0].price}</h6> */}
      {/*       <Button variant="dark" className="btn-sm"> */}
      {/*         Add ao carrinho */}
      {/*       </Button> */}
      {/*     </div> */}
      {/*   ); */}
      {/* })} */}
    </>
  );
};
export default List;
