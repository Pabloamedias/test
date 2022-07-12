import React from "react";
import Navegador from "../Navegador";
import { Button } from "react-bootstrap";

export default function MenuProductos() {
  return (
    <div>
      <Navegador />
      <div className="botones ">
        <Button className="btnwow" size="lg">
          Agregar producto
        </Button>
        <Button className="btnwow" size="lg">
          Quitar quitar producto
        </Button>
      </div>
    </div>
  );
}
