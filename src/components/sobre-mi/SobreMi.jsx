import fotoCv from "/img/fotoCv.png";
import { IoPersonOutline } from "react-icons/io5";

import styles from "./sobreMi.module.css"

export function SobreMi() {
  return (
    <>
      <section className={styles.sobreMi}>
        <h2>
          <IoPersonOutline /> Sobre mi
        </h2>

        <main>
          <img src={fotoCv} alt="" />

          <div>
            <p>
              Me llamo Tomás, soy de Buenos Aires, Argentina. Comencé a estudiar
              desarrollo web mediante cursos hasta ingresar en la Tecnicatura de
              Desarrollo Web y Aplicaciones Móviles que dicta el ISPC. A partir
              de ahí, estoy desarrollando diversos proyectos tanto personales
              como del estudio, lo que me permite avanzar en mi carrera
              profesional.
              <br />
              <br />
              Ahora mismo estoy incursionando en el freelance, aunque también
              estoy interesado en trabajar bajo dependencia. Mi objetivo es
              poder vivir de esta pasión que es la creación de páginas web,
              hacer que mi hobby sea mi trabajo, lo cual considero que es muy
              importante para la salud mental de uno mismo.
            </p>
          </div>
        </main>
      </section>
    </>
  );
}
