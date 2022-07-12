import React from "react";
import { Table } from "react-bootstrap";

export default function HistorialGeneral() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Producto más vendido</th>
          <td>California Rolls</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Plataforma más vendida</th>
          <td>WhatsApp</td>
        </tr>
        <tr>
          <th>Total de ventas</th>
          <td>10</td>
        </tr>
      </tbody>
    </Table>
  );
}
