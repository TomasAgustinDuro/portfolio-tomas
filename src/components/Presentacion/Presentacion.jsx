import fotoCv from "/img/fotoCv.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import styles from "./presentacion.module.css";

const handleLinkClick = (url, isMail = false) => {
  if (isMail) {
    window.location.href = `mailto:${url}`;
  } else {
    window.open(url, "_blank");
  }
};

export function Presentacion() {
  return (
    <main>
      <section className={styles.main}>
        <div className={styles.contenedorTexto}>
          <p className={styles.textoNombre}>
            <span>👋</span> Hola, soy Tomas
          </p>
          <h2>Realizo páginas web</h2>
          <p className={styles.textoDescripcion}>
            Soy
            <span id={styles.front}> Frontend Developer</span>. Estudio la
            tecnicatura en Desarrollo Web y Aplicaciones móviles.
          </p>
          <div className={styles.buttons}>
            <button
              className="btn"
              onClick={() => handleLinkClick("durotomaas@gmail.com", true)}
            >
              <MdOutlineMailOutline size={20} />
              Contáctame
            </button>
            <button
              className="btn"
              onClick={() =>
                handleLinkClick("https://www.linkedin.com/in/tomas-duro/")
              }
            >
              <FaLinkedin size={20} />
              Linkedin
            </button>
            <button
              className="btn"
              onClick={() =>
                handleLinkClick("https://github.com/TomasAgustinDuro")
              }
            >
              <FiGithub size={20} />
              Github
            </button>
          </div>
        </div>
        <img src={fotoCv} id={styles.fotoCv} alt="foto de carnet" />
      </section>
    </main>
  );
}
