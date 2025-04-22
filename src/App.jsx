import "./App.css";
import { Navbar } from "./components";
import { Presentacion } from "./components";
import { Proyectos } from "./components";
import { Tecnologias } from "./components";
import { SobreMi } from "./components";
import { Carrousel } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../i18n";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Presentacion />
        <Proyectos />
        <Tecnologias />
        <SobreMi />
        <Carrousel />
      </main>
    </Router>
  );
}

export default App;
