import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">{t('navbar.home')}</Link>
        </li>
        <li>
          <Link to="/proyectos">{t('navbar.projects')}</Link>
        </li>
        <li>
          <Link to="/tecnologias">{t('navbar.tecnologies')}</Link>
        </li>
        <li>
          <Link to="/sobre-mi">{t('navbar.about')}</Link>
        </li>
        <li>
          <Link to="/certificados">{t('navbar.certificates')}</Link>
        </li>
        <div>
        <button onClick={() => i18n.changeLanguage("es")}>🇪🇸</button>
        <button onClick={() => i18n.changeLanguage("en")}>🇬🇧</button>
      </div>
      </ul>

    </nav>
  );
}
