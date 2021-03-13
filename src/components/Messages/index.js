import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

function MessageCart() {
  const isShow = useSelector(state => state.layout.showMessage);
  return (
    <>
      {isShow && (
        <div className="container mt-3">
          <Alert variant="success">Produto Adicionado com sucesso</Alert>
        </div>
      )}
    </>
  );
}
export default MessageCart;
