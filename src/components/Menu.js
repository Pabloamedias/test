import React from "react";
import { Button } from "react-bootstrap";
import "../assets/MenuStyles.css";
import Navegador from "./Navegador";

const Menu = () => {
  return (
    <div>
      <Navegador></Navegador>
      <h1 className="centrado">¡Bienvenida Maritza!</h1>
      <h2 className="centrado">¿Que necesitas hacer hoy?</h2>
      <div className="botones">
        <Button className="button" size="lg" href="/formulario">
          Ingresar pedido
        </Button>
        <Button className="button" size="lg" href="/historial">
          Revisar Historial
        </Button>

        <Button className="button" size="lg" href="/productos">
          Gestionar Productos
        </Button>
        <Button className="button" size="lg" href="/plataformas">
          Gestionar Plataformas
        </Button>
      </div>
    </div>
  );
};

export default Menu;
