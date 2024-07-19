import {
  FaHtml5,
  FaCss3,
  FaAngular,
  FaJs,
  FaFigma,
  FaSass,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaReact,
} from "react-icons/fa6";

export function Tecnologias() {
  return (
    <section className="section-tecnologias">
      <h1>Tecnologias</h1>

      <div className="contenedor-tecnologias">
        <div className="contenedor-tecnologias-front">
          <header>Frontend</header>
          <main>
            <FaHtml5 size={50} />
            <FaCss3 size={50} />
            <FaAngular size={50} />
            <FaJs size={50} />
            <FaFigma size={50} />
            <FaSass size={50} />
          </main>
        </div>
        <div className="contenedor-tecnologias-back">
          <header>Backend</header>
          <main>
            <FaFigma size={50} />
            <FaSass size={50} />
            <FaPython size={50} />
          </main>
        </div>
        <div className="contenedor-tecnologias-aprendiendo">
          {" "}
          <header>Aprendiendo</header>
          <main>
            <FaReact size={50}/>

          </main>
        </div>
        <div className="contenedor-tecnologias-herramientas">
          {" "}
          <header>Herramientas</header>
          <main>
            <FaGitAlt size={50} />
            <FaGithub size={50} />
          </main>
        </div>
      </div>
    </section>
  );
}
