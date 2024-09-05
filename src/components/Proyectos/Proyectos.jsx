import { IoCodeSlashSharp } from "react-icons/io5";
import proyectos from "../../assets/proyectos.json";
import { Item } from "./index";
import { FaHtml5, FaCss3, FaReact, FaAngular, FaJs } from "react-icons/fa6";
import { SiTypescript, SiFirebase } from "react-icons/si";

import styles from "./Proyectos.module.css";

export function Proyectos() {
  const iconMap = {
    FaHtml5: <FaHtml5 size={25} />,
    FaCss3: <FaCss3 size={25} />,
    FaReact: <FaReact size={25} />,
    FaAngular: <FaAngular size={25} />,
    FaJs: <FaJs size={25} />,
    SiTypescript: <SiTypescript size={25} />,
    SiFirebase: <SiFirebase size={25} />,
  };

  return (
    <>
      <section className={styles.proyectos} id="proyectos">
        <h2>
          <IoCodeSlashSharp /> Proyectos
        </h2>

        <main>
          <div className={styles.grid}>
            {proyectos.map((proyecto, index) => (
              <Item
                key={index}
                img={proyecto.img}
                titulo={proyecto.titulo}
                tecnologia={proyecto.tecnologia.map((icono) => iconMap[icono])}
                texto={proyecto.texto}
                github={proyecto.github}
                preview={proyecto.preview}
                className={styles.item}
              />
            ))}
          </div>
        </main>
      </section>
    </>
  );
}
