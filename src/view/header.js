import { Nav, Navbar, Badge, Button } from "react-bootstrap";
import { Link, BrowserRouter as Router } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="p-1"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="#home">Cart React</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Nav className="mx-auto">
          <Link to="/" className="link-light text-decoration-none">
            Home
          </Link>
          <Link className="link-light text-decoration-none " to="/finalizar">
            Finalizar Comprar
          </Link>
          <Link className="link-light text-decoration-none " to="/add-produto">
            Add produto
          </Link>
        </Nav>
        <Nav className="d-flex justify-content-end ">
          <Button variant="primary">
            Carrinho <Badge variant="warning fs-5">9</Badge>
          </Button>
        </Nav>
      </Navbar>
    </>
  );
};
export default Header;
