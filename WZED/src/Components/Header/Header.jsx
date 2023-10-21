import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Images/logo.webp';
import './Header.css';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar bg-body-tertiary m-0 p-0 w-100">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="logo" className='nav-logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <p className='nav-portfolio'>portfolio</p>
            <p className='nav-about'>about</p>
            <Button className="contact-button">Contact</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;