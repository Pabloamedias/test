import React from "react";
import { Button } from "react-bootstrap";
import "../assets/MenuStyles.css";

const Menu = () => {
  return (
    <div>
      <h1 className="centrado">¡Bienvenida Maritza!</h1>
      <h2 className="centrado">¿Que necesitas hacer hoy?</h2>
      <div className="botones">
        <Button className="button" size="lg" href="/formulario">
          Ingresar pedido
        </Button>
        <Button className="button" size="lg">
          Revisar Historial
        </Button>

        <Button className="button" size="lg">
          Ingresar/Modificar producto
        </Button>
      </div>
    </div>
  );
};

export default Menu;
