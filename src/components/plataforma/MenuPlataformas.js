import React from "react";
import { Button } from "react-bootstrap";
import Navegador from "../Navegador";

export default function MenuPlataformas() {
  return (
    <div>
      <Navegador />
      <div className="botones ">
        <Button className="btnwow" size="lg">
          Agregar plataforma
        </Button>
        <Button className="btnwow" size="lg">
          Quitar plataforma
        </Button>
      </div>
    </div>
  );
}
