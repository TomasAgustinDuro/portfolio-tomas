import fotoCv from "/img/fotoCv.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
export function Presentacion() {
  const handleGithubClick = () => {
    window.open("https://github.com/TomasAgustinDuro", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/tomas-duro/", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:durotomaas@gmail.com";
  };

  return (
    <>
      <main>
        <section className="main-presentacion">
          <div className="presentacion-contenedor-texto">
            <p className="presentacion-texto-nombre">
              <span>👋</span> Hola, soy Tomas
            </p>
            <h2>Realizo paginas web</h2>
            <p className="presentacion-texto-descripcion">
              Soy
              <span id="presentacion-front"> Frontend Developer</span>. Estudio
              la tecnicatura en Desarrollo Web y Aplicaciones moviles.
            </p>
            <div className="presentacion-buttons">
              <button className="btn" onClick={handleEmailClick}>
                <MdOutlineMailOutline size={20} />
                Contactame
              </button>
              <button className="btn" onClick={handleLinkedinClick}>
                <FaLinkedin size={20} />
                Linkedin
              </button>
              <button className="btn" onClick={handleGithubClick}>
                <FiGithub size={20} />
                Github
              </button>
            </div>
          </div>

          <img src={fotoCv} id="fotoCv" alt="foto de carnet" />
        </section>
      </main>
    </>
  );
}
