import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import{LinkContainer} from "react-router-bootstrap";
import logo from '../assets/zovoralogoo.png'

const Header = () => {
  return (
    <header>
      <Navbar bg="black" variant="dark" expand="md" collapseOnSelect>
      <Container>
        <LinkContainer to ='/'>
        <Navbar.Brand >
          <img src={logo} alt="zovora"/>
         </Navbar.Brand>
         </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/cart">
            <Nav.Link >
              <FaShoppingCart />
              Cart
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
             <Nav.Link href="/login">
            <FaUser/>
            Sign in
            </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </header>
  );
};

export default Header;
