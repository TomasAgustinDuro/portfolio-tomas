import ara from "../assets/img/ara.png";
import emma from "../assets/img/emma.webp";
import encriptador from "../assets/img/encriptador.png";
import climate from "../assets/img/climate.png";
import todo from "../assets/img/to-do.png";
import { Item } from "./Item.jsx";
import { FaHtml5, FaCss3, FaAngular, FaJs } from "react-icons/fa6";
import { IoCodeSlashSharp } from "react-icons/io5";

import { SiTypescript, SiFirebase } from "react-icons/si";

export function Proyectos() {
  return (
    <>
      <section className="section-proyectos" id="proyectos">
        <h2>
          <IoCodeSlashSharp/> Proyectos
        </h2>

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
                  <SiFirebase size={25} />
                </>
              }
              texto={
                "Web para emprendimiento. Cumple la funcion de turnero ademas de visualizar trabajos y servicios dados. Creado con Angular, TypeScript, SCSS para los estilos y  Firebase para la base de datos."
              }
              github={"https://github.com/TomasAgustinDuro/aranails"}
              preview={"https://aracelinails-5fe42.web.app/"}
            />

            <Item
              img={emma}
              titulo={"Emma"}
              tecnologia={
                <>
                  <FaAngular size={25} />
                  <FaCss3 size={25} />
                  <SiTypescript size={25} />
                  <SiFirebase size={25} />
                </>
              }
              texto={
                "Template web. Es adaptable para cualquier negocio. Creado con Angular, TypeScript y utilice CSS para los estilos"
              }
              github={"https://github.com/TomasAgustinDuro/Emma"}
              preview={"https://emma-e33b8.web.app/"}
            />

            <Item
              img={climate}
              titulo={"Climate"}
              tecnologia={
                <>
                  <FaAngular size={25} />
                  <FaCss3 size={25} />
                  <SiTypescript size={25} />
                  <SiFirebase size={25} />
                </>
              }
              texto={
                "Plataforma para revisar el clima. Creada con Angular, consume la API de Open Weather y utiliza SCSS para los estilos."
              }
              github={"https://github.com/TomasAgustinDuro/ClimatePage"}
              preview={"https://climatepage-76c59.web.app/"}
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
                "Plataforma que permite cifrar un mensaje. Es una web creada en tiempo de ocio. Utiliza HTML, CSS y JS"
              }
              github={"https://github.com/TomasAgustinDuro/Encriptador"}
              preview={"https://tomasagustinduro.github.io/Encriptador/"}
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
                "Web que permite armar una lista de tareas, estas son editables y eliminables. Esta creado con HTML, CSS y JS."
              }
              github={"https://github.com/TomasAgustinDuro/ToDo-List"}
              preview={"https://tomasagustinduro.github.io/ToDo-List/"}
            />
          </div>
        </main>
      </section>
    </>
  );
}
