import "./App.css";
import Formulario from "./components/formulario";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Historial from "./components/historial/Historial";
import HistorialGeneral from "./components/historial/HistorialGeneral";
import Historial_fecha from "./components/historial/Historial_fecha";
import MenuProductos from "./components/productos/MenuProductos";
import MenuPlataformas from "./components/plataforma/MenuPlataformas";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/productos" element={<MenuProductos />} />
        <Route path="/historialgeneral" element={<HistorialGeneral />} />
        <Route path="/historialfecha" element={<Historial_fecha />} />
        <Route path="plataformas" element={<MenuPlataformas />} />
      </Routes>
    </div>
  );
}

export default App;
