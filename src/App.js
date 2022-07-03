import "./App.css";
import Formulario from "./components/formulario";
import Menu from "./components/Menu";
import Navegador from "./components/Navegador";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Navegador></Navegador>
      <Routes>
        <Route exact path="/" element={<Menu />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
