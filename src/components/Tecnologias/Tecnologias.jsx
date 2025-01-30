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
import { HiOutlinePencilAlt } from "react-icons/hi";

import styles from "./tecnologias.module.css";

import { useTranslation } from "react-i18next";

export function Tecnologias() {
  const { t, i18n } = useTranslation();

  return (
    <section className={styles.tecnologias} id="tecnologias">
      <h2>
        <HiOutlinePencilAlt />
        {t('tecnologies.title')}
      </h2>

      <div className={styles.contenedorTecnologias}>
        <div className={styles.contenedorTecnologiasFront}>
          <header>{t('tecnologies.frontend')}</header>
          <main>
            <FaHtml5 size={50} />
            <FaCss3 size={50} />
            <FaAngular size={50} />
            <FaJs size={50} />
            <FaFigma size={50} />
            <FaSass size={50} />
          </main>
        </div>
        <div className={styles.contenedorTecnologiasBack}>
          <header>{t('tecnologies.backend')}</header>
          <main>
            <FaFigma size={50} />
            <FaSass size={50} />
            <FaPython size={50} />
          </main>
        </div>
        <div className={styles.contenedorTecnologiasAprendiendo}>
          <header>{t('tecnologies.learning')}</header>
          <main>
            <FaReact size={50} />
          </main>
        </div>
        <div className={styles.contenedorTecnologiasHerramientas}>
          <header>{t('tecnologies.tools')}</header>
          <main>
            <FaGitAlt size={50} />
            <FaGithub size={50} />
          </main>
        </div>
      </div>
    </section>
  );
}
