import "./App.css";
import { Navbar } from "./components/Navbar";
import { Presentacion } from "./components/Presentacion";
import { Proyectos } from "./components/Proyectos";
import { Tecnologias } from "./components/Tecnologias";
import { SobreMi } from "./components/SobreMi";
import { Carrousel } from "./components/Carrousel";

function App() {
  return (
    <>
      <Navbar />
      <Presentacion />
      <Proyectos />
      <Tecnologias/>
      <SobreMi />
      <Carrousel />
    </>
  );
}

export default App;
