import fotoCv from "../assets/img/fotoCv.png";
import { IoPersonOutline } from "react-icons/io5";

export function SobreMi() {
  return (
    <>
      <section className="section-sobre-mi" id="sobre-mi">
        <h2>
          <IoPersonOutline /> Sobre mi
        </h2>

        <main>
          <img src={fotoCv} alt="" />

          <div>
            <p>
              Me llamo Tomas, soy de Buenos Aires, Argentina. Comence a estudiar
              desarrollo web mediante cursos hasta entrar en la Tecnicatura de
              Desarrollo web y Aplicaciones Moviles que dictaba el ISPC. A
              partir de ahi estoy desarrollando diversos proyectos tanto
              personales como del estudio que me permiten ir avanzando con mi
              carrera profesional.
              <br />
              <br />
              Ahora mismo estoy incursionando en el freelance aunque tambien
              estoy interesando en trabajar bajo dependencia. Mi objetivo es
              poder vivir de esta pasion que es la creacion de paginas webs,
              hacer que mi hobbie sea mi trabajo lo cual considero que es muy
              importante para la salud mental de uno mismo.
            </p>
          </div>
        </main>
      </section>
    </>
  );
}
