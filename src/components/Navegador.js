import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navegador = () => {
  let [titulo, setTitulo] = useState("Menú");

  const listaTitulos = {
    "/menu": "Menú",
    "/formulario": "Ingreso de pedidos",
    "/historial": "Historial de pedidos",
    "/productos": "Gestionar productos",
    "/plataformas": "Gestionar plataformas",
  };
  useEffect(() => {
    setTitulo((titulo = listaTitulos[window.location.pathname]));
  });

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>{titulo}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/menu">Volver a Menú</Nav.Link>
          <Nav.Link href="/">Cerrar sesión</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navegador;
