import { React, useState } from "react";
import {
  Form,
  Button,
  Card,
  ListGroup,
  InputGroup,
  FormControl,
  Modal,
} from "react-bootstrap";
import "../assets/FormularioStyles.css";
import Navegador from "./Navegador";

const Formulario = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const imprimir = () => {
    window.print();
    handleClose();
  };
  const setear = () => {
    const user = "Maritza";
    const fecha =
      hoy.getDate() + "/" + hoy.getMonth() + "/" + hoy.getFullYear();
    const hora = hoy.getHours() + ":" + hoy.getMinutes();
    const plataforma = "WhatsApp";
    const entrega = "Retiro a domicilio";
    const descripcion = "30 pcs California Rolls";
    const valor = "$5.000";
  };
  var hoy = new Date();
  return (
    <div>
      <Navegador></Navegador>
      <div className="divisiones">
        <Form className="w-50 formulario">
          <h3 style={({ padding: "10px" }, { textAlign: "center" })}>
            Ingresa los datos del pedido
          </h3>

          <h6>Usuario</h6>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={"Maritza"}
              readOnly
            />
          </Form.Group>

          <h6>Plataforma del pedido</h6>
          <Form.Select aria-label="Default select example">
            <option>Seleccione una opción</option>
            <option value="1">WhatsApp</option>
            <option value="2">Instagram</option>
            <option value="3">Facebook</option>
          </Form.Select>
          <h6>Forma de entrega</h6>
          <Form.Select aria-label="Default select example">
            <option>Selecciona una opción</option>
            <option value="1">Retiro en tienda</option>
            <option value="2">Despacho</option>
          </Form.Select>

          <h6>Descripción del pedido</h6>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Ej: 30 pcs de Calfornia Rolls"
            />
          </Form.Group>

          <h6>Valor total</h6>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl aria-label="Amount (to the nearest dollar)" />
          </InputGroup>

          <Button variant="primary" className="boton" onClick={handleShow}>
            Ingresar pedido
          </Button>
        </Form>

        <div className="cards">
          <h3 style={({ padding: "10px" }, { textAlign: "center" })}>
            Pedidos en proceso:
          </h3>

          <Card className="icard">
            <Card.Header>Nro de pedido: 1</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Usuario: Maritza </ListGroup.Item>
              <ListGroup.Item>
                Hora de ingreso: {hoy.getHours() + ":" + hoy.getMinutes()}{" "}
              </ListGroup.Item>

              <ListGroup.Item>
                Fecha de ingreso:{" "}
                {hoy.getDate() + "/" + hoy.getMonth() + "/" + hoy.getFullYear()}{" "}
              </ListGroup.Item>
              <ListGroup.Item>Plataforma de pedido: WhatsApp</ListGroup.Item>
              <ListGroup.Item>
                Forma de entrega: Retiro en Tienda{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                Descripción de pedido: 30 pcs de California Rolls
              </ListGroup.Item>
              <ListGroup.Item>Valor total $5.000: </ListGroup.Item>

              <div className="buttons">
                <Button variant="success" className="btn-verde-rojo">
                  Finalizar pedido
                </Button>
                <Button variant="danger">Cancelar pedido</Button>
              </div>
            </ListGroup>
          </Card>

          <Card className="icard">
            <Card.Header>Nro de pedido: 2</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Usuario: Maritza </ListGroup.Item>
              <ListGroup.Item>
                Hora de ingreso: {hoy.getHours() + ":" + hoy.getMinutes()}{" "}
              </ListGroup.Item>

              <ListGroup.Item>
                Fecha de ingreso:
                {hoy.getDate() +
                  "/" +
                  hoy.getMonth() +
                  "/" +
                  hoy.getFullYear()}{" "}
              </ListGroup.Item>
              <ListGroup.Item>Plataforma de pedido: WhatsApp</ListGroup.Item>
              <ListGroup.Item>
                Forma de entrega: Retiro en Tienda{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                Descripción de pedido: 30 pcs de California Rolls
              </ListGroup.Item>
              <ListGroup.Item>Valor total $5.000: </ListGroup.Item>

              <div className="buttons">
                <Button variant="success" className="btn-verde-rojo">
                  Finalizar pedido
                </Button>
                <Button variant="danger">Cancelar pedido</Button>
              </div>
            </ListGroup>
          </Card>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pedido</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <b>Usuario:</b> Maritza
          </Modal.Body>
          <Modal.Body>
            <b>Fecha de registro:</b>{" "}
            {hoy.getDate() + "/" + hoy.getMonth() + "/" + hoy.getFullYear()}
          </Modal.Body>
          <Modal.Body>
            <b>Hora de registro:</b> {hoy.getHours() + ":" + hoy.getMinutes()}
          </Modal.Body>
          <Modal.Body>
            <b>Plataforma de pedido:</b> WhatsApp
          </Modal.Body>
          <Modal.Body>
            <b>Forma de entrega:</b> Retiro en local
          </Modal.Body>
          <Modal.Body>
            <b>Descripción del pedido:</b> 30 pcs California Rolls
          </Modal.Body>
          <Modal.Body>
            <b>Valor total:</b> $5.000
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={imprimir}>
              Imprimir y guardar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Formulario;
