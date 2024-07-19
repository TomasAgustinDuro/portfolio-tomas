import "./App.css";
import { Navbar } from "./components/Navbar";
import { Presentacion } from "./components/Presentacion";
import { Proyectos } from "./components/Proyectos";
import { Tecnologias } from "./components/Tecnologias";
import { SobreMi } from "./components/SobreMi";

function App() {
  return (
    <>
      <Navbar />
      <Presentacion />
      <Proyectos />
      <Tecnologias/>
      <SobreMi />
    </>
  );
}

export default App;
