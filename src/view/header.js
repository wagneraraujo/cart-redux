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
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-flex d-flex justify-content-between "
        >
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" className="link-light text-decoration-none">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="link-light text-decoration-none "
                to="/finalizar"
              >
                Finalizar Comprar
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="d-flex justify-content-end">
            <Button variant="primary">
              Carrinho <Badge variant="warning fs-5">9</Badge>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
