import { Link } from "react-scroll";
import styles from "./navbar.module.css";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="presentacion" smooth={true} duration={500} offset={-80}>
            {t("navbar.home")}
          </Link>
        </li>
        <li>
          <Link to="proyectos" smooth={true} duration={500} offset={-80}>
            {t("navbar.projects")}
          </Link>
        </li>
        <li>
          <Link to="tecnologias" smooth={true} duration={500} offset={-80}>
            {t("navbar.tecnologies")}
          </Link>
        </li>
        <li>
          <Link to="sobre-mi" smooth={true} duration={500} offset={-80}>
            {t("navbar.about")}
          </Link>
        </li>
        <li>
          <Link to="carrousel" smooth={true} duration={500} offset={-80}>
            {t("navbar.certificates")}
          </Link>
        </li>
        <div>
          <button onClick={() => i18n.changeLanguage("es")}>🇪🇸</button>
          <button onClick={() => i18n.changeLanguage("en")}>🇬🇧</button>
        </div>
      </ul>
    </nav>
  );
}
