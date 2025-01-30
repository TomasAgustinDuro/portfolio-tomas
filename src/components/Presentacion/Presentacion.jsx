import fotoCv from "/img/fotoCv.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import styles from "./presentacion.module.css";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";


const handleLinkClick = (url, isMail = false) => {
  if (isMail) {
    window.location.href = `mailto:${url}`;
  } else {
    window.open(url, "_blank");
  }
};

export function Presentacion() {
  const { t, i18n} = useTranslation();

  return (
    <main>

      <section className={styles.main}>
        <div className={styles.contenedorTexto}>
          <p className={styles.textoNombre}>
           {t('presentacion.greeting')}
          </p>
          <h2>{t('presentacion.title')}</h2>
          <p className={styles.textoDescripcion}>
            <Trans i18nKey="presentacion.description">
              Soy <span className={styles.front}>Frontend Developer</span>. Estudio la tecnicatura en Desarrollo Web y Aplicaciones móviles.
            </Trans>
          </p>
          <div className={styles.buttons}>
            <button
              className="btn"
              onClick={() => handleLinkClick("durotomaas@gmail.com", true)}
            >
              <MdOutlineMailOutline size={20} />
              {t('presentacion.contact')}
            </button>
            <button
              className="btn"
              onClick={() =>
                handleLinkClick("https://www.linkedin.com/in/tomas-duro/")
              }
            >
              <FaLinkedin size={20} />
              {t('presentacion.linkedin')}
            </button>
            <button
              className="btn"
              onClick={() =>
                handleLinkClick("https://github.com/TomasAgustinDuro")
              }
            >
              <FiGithub size={20} />
              {t('presentacion.github')}
            </button>
          </div>
        </div>
        <img src={fotoCv} id={styles.fotoCv} alt="foto de carnet" />
      </section>
    </main>
  );
}
