import Header from "./view/header";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import FinalChekout from "./pages/finalizar";
import AddProduto from "./pages/add";
import MessageCart from "./components/Messages";
function App() {
  return (
    <>
      <Router>
        <Header />
        <MessageCart />
        <Container>
          <Row className="mt-3">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/finalizar" component={FinalChekout} />
              <Route exact path="/add-produto" component={AddProduto} />
            </Switch>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
