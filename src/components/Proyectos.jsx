import ara from "../assets/img/ara.png";
import emma from "../assets/img/emma.webp";
import encriptador from "../assets/img/encriptador.png";
import climate from "../assets/img/climate.png";
import todo from "../assets/img/to-do.png";
import { Item } from "./Item.jsx";
import {
  FaHtml5,
  FaCss3,
  FaAngular,
  FaJs
} from "react-icons/fa6";

import { SiTypescript,SiFirebase } from "react-icons/si";


export function Proyectos() {
  return (
    <>
      <section className="section-proyectos">
        <header>
          <h1>Proyectos</h1>
        </header>

        <main>
          <div className="grid">
            <Item
              img={ara}
              titulo={"Araceli Nails"}
              tecnologia={
                <>
                  <FaAngular size={25} />
                  <FaCss3 size={25} />
                  <SiTypescript size={25} />
                  <SiFirebase size={25}/>
                </>
              }
              texto={
                " Una web para el emprendimiento de mi pareja. En la misma se puede sacar turno para atenderse, cancelar dicho turno, ver los trabajos que ella realiza, que servicios brinda y dejar una opinión sobre lo realizado. Se utilizo Angular y Firebase"
              }
              github={'https://github.com/TomasAgustinDuro/aranails'}
              preview={'https://aracelinails-5fe42.web.app/'}
            />

            <Item
              img={emma}
              titulo={"Emma"}
              tecnologia={
                <>
                  <FaAngular size={25} />
                  <FaCss3 size={25} />
                  <SiTypescript size={25} />
                  <SiFirebase size={25}/>
                </>
              }
              texto={
                " Una web para el emprendimiento de mi pareja. En la misma se puede sacar turno para atenderse, cancelar dicho turno, ver los trabajos que ella realiza, que servicios brinda y dejar una opinión sobre lo realizado. Se utilizo Angular y Firebase"
              }
              github={'https://github.com/TomasAgustinDuro/Emma'}
              preview={'https://emma-e33b8.web.app/'}
            />

            <Item
              img={climate}
              titulo={"Climate"}
              tecnologia={
                <>
                  <FaAngular size={25} />
                  <FaCss3 size={25} />
                  <SiTypescript size={25} />
                  <SiFirebase size={25}/>
                </>
              }
              texto={
                " Una web para el emprendimiento de mi pareja. En la misma se puede sacar turno para atenderse, cancelar dicho turno, ver los trabajos que ella realiza, que servicios brinda y dejar una opinión sobre lo realizado. Se utilizo Angular y Firebase"
              }
              github={'https://github.com/TomasAgustinDuro/ClimatePage'}
              preview={'https://climatepage-76c59.web.app/'} 
            />

            <Item
              img={encriptador}
              titulo={"Encriptador"}
              tecnologia={
                <>
                <FaHtml5 size={25} />
                <FaJs size={25} />
                </>
              }
              texto={
                " Una web para el emprendimiento de mi pareja. En la misma se puede sacar turno para atenderse, cancelar dicho turno, ver los trabajos que ella realiza, que servicios brinda y dejar una opinión sobre lo realizado. Se utilizo Angular y Firebase"
              }
              github={'https://github.com/TomasAgustinDuro/Encriptador'}
              preview={'https://tomasagustinduro.github.io/Encriptador/'}
            />

            <Item
              img={todo}
              titulo={"Aplicacion To Do"}
              tecnologia={
                <>
                <FaHtml5 size={25} />
                <FaJs size={25} />
                </>
              }
              texto={
                " Una web para el emprendimiento de mi pareja. En la misma se puede sacar turno para atenderse, cancelar dicho turno, ver los trabajos que ella realiza, que servicios brinda y dejar una opinión sobre lo realizado. Se utilizo Angular y Firebase"
              }
              github={'https://github.com/TomasAgustinDuro/ToDo-List'}
              preview={'https://tomasagustinduro.github.io/ToDo-List/'}
            />
          </div>
        </main>
      </section>
    </>
  );
}
