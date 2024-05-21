import { Container } from 'react-bootstrap';
import { Outlet } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Navb() {
  return (
    <>
    <Container className='top-fix'>
      <Navbar expand="lg" className="fixed-top bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" className='text-uppercase'>Lóvé • A lovas web</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Főoldal</Nav.Link>
              <Nav.Link href="/information">Több Információ</Nav.Link>
              <Nav.Link href="/nopage">No Page</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container>
      <Outlet />
    </>
  )
}