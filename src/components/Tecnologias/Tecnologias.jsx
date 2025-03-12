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
import { motion } from "framer-motion";

import styles from "./tecnologias.module.css";

import { useTranslation } from "react-i18next";

export function Tecnologias() {
  const { t } = useTranslation();

  return (
    <section className={styles.tecnologias} id="tecnologias">
      <h2>
        <HiOutlinePencilAlt />
        {t("tecnologies.title")}
      </h2>

      <motion.div
        className={styles.contenedorTecnologias}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
        }}
      >
        <div className={styles.contenedorTecnologiasFront}>
          <header>{t("tecnologies.frontend")}</header>
          <main>
            <a
              href="https://es.wikipedia.org/wiki/HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaHtml5 size={50} />
            </a>
            <a
              href="https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCss3 size={50} />
            </a>
            <a
              href="https://es.wikipedia.org/wiki/Angular_(framework)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaAngular size={50} />
            </a>
            <a
              href="https://es.wikipedia.org/wiki/React"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReact size={50} />
            </a>
            <a
              href="https://es.wikipedia.org/wiki/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaJs size={50} />
            </a>
            <a
              href="https://es.wikipedia.org/wiki/Figma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFigma size={50} />
            </a>
            <a
              href="https://es.wikipedia.org/wiki/Sass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSass size={50} />
            </a>
          </main>
        </div>

        <div className={styles.contenedorTecnologiasBack}>
          <header>{t("tecnologies.backend")}</header>
          <main>
            <a
              href="https://es.wikipedia.org/wiki/Figma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFigma size={50} />
            </a>
            <a
              href="https://es.wikipedia.org/wiki/Sass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSass size={50} />
            </a>
            <a
              href="https://es.wikipedia.org/wiki/Python"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPython size={50} />
            </a>
          </main>
        </div>

        <div className={styles.contenedorTecnologiasHerramientas}>
          <header>{t("tecnologies.tools")}</header>
          <main>
            <a
              href="https://es.wikipedia.org/wiki/Git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGitAlt size={50} />
            </a>
            <a
              href="https://es.wikipedia.org/wiki/GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={50} />
            </a>
          </main>
        </div>
      </motion.div>
    </section>
  );
}
