import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const List = () => {
  const Produtos = useSelector(state => state);
  return (
    <>
      {Produtos.map(item => {
        return (
          <div className="col-md-2 mt-3" key={item.id}>
            <div>
              <img src={item.image} alt={item.name} className="img-fluid" />
            </div>
            <h5>{item.name}</h5>
            <h6>R$ {item.price}</h6>
            <Button>Add ao carrinho</Button>
          </div>
        );
      })}
    </>
  );
};
export default List;
