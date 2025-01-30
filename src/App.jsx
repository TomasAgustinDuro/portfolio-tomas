import "./App.css";
import { Navbar } from "./components";
import { Presentacion } from "./components";
import { Proyectos } from "./components";
import { Tecnologias } from "./components";
import { SobreMi } from "./components";
import { Carrousel } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../i18n'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/certificados" element={<Carrousel />} />
      </Routes>
    </Router>
  );
}

export default App;
