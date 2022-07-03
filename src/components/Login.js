import React from "react";
import { Form, Button } from "react-bootstrap";
import "../assets/LoginStyles.css";

const Login = () => {
  return (
    <div className="login">
      <h2>Ingrese sus credenciales</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu nombre de usuario"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingresa tu contraseña" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" href="/menu">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
