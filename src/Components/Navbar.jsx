//crear carpeta y archivo dentro de src
// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

//Nav.Link son las rutas
const NavBar = () => {
    return (
        <div>
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme='dark' bg='dark'>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
      <NavLink to="/" className={'nav-link'}>Inicio</NavLink>
      <NavLink to="/AcercadeNosotros" className={'nav-link'}>Acerca de Nosotros</NavLink>
      <NavLink to="/Administracion" className={'nav-link'}>Administracion</NavLink>
      </Nav>
    </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavBar; 
//no olvidar importar y montar en app