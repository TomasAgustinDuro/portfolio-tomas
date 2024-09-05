import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
        <Link to="/">Home</Link>  
        </li>
        <li>
          <Link to="/proyectos">Proyectos</Link>
        </li>
        <li>
          <Link to="/tecnologias">Tecnologías</Link>
        </li>
        <li>
          <Link to="/sobre-mi">Sobre mí</Link>
        </li>
        <li>
          <Link to="/certificados">Certificados</Link>
        </li>
      </ul>
    </nav>
  );
}
