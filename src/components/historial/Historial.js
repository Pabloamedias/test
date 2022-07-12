import { React, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import Navegador from "../Navegador";

export default function Historial() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navegador />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Nro de ventas</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>California Rolls</td>
            <td>100</td>
            <td>Avocado Rolls</td>
          </tr>
          <tr>
            <td>Kanikama Rolls</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Avocado Rolls</td>
            <td colSpan={2}>Larry the Bird</td>
            <td></td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={handleShow}>Boton de error</Button>

      {/*----Modal de error----*/}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ha ocurrido un error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Estamos trabajando para usted</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} href="/menu">
            Ir a Menú
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
