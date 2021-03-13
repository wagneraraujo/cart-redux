import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { addProduto } from "../../store/produtos";
import { useDispatch } from "react-redux";
const AddProduto = () => {
  const [form, setForm] = useState({
    id: Math.floor(Math.random() * 10 + 1),
    name: "",
    price: "",
    image: ""
  });
  const dispatch = useDispatch();

  function formChange(e) {
    //array atual e vou repassar o valor de cada "name"
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(addProduto(form));
    //usar o dispatch para conectar essa action
    console.log(form);
  }

  return (
    <>
      <div className="row">
        <h4>Add Produto</h4>
      </div>
      <div className="row">
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label> Nome produto</Form.Label>
            <Form.Control
              onChange={formChange}
              type="text"
              name="name"
              value={form.name}
              placeholder="Titulo produto"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Preço</Form.Label>
            <Form.Control
              type="number"
              name="price"
              onChange={formChange}
              placeholder="0.00"
              value={form.price}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Imagem</Form.Label>
            <Form.Control
              onChange={formChange}
              type="text"
              name="image"
              placeholder="/imagem/nomeproduto.jpg"
              value={form.image}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Adicionar Produto
          </Button>
        </Form>
      </div>
    </>
  );
};
export default AddProduto;
