import React from "react";
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navegador = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Navegador</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Volver a Menú</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navegador;
