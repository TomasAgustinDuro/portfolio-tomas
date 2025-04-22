import fotoCv from "/img/fotoCv.png";
import { IoPersonOutline } from "react-icons/io5";
import styles from "./sobreMi.module.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function SobreMi() {
  const { t } = useTranslation();
  const maskVariants = {
    hidden: { clipPath: "inset(0 100% 0 0)" }, // Oculta el contenido (máscara al 100% a la derecha)
    reveal: { clipPath: "inset(0 0% 0 0)" }, // Revela el contenido (máscara al 0%)
  };

  return (
    <>
      <motion.section
        id="sobre-mi"
        className={styles.sobreMi}
        initial="hidden"
        whileInView="reveal"
        variants={maskVariants}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <h2>
          <IoPersonOutline /> {t("aboutMe.title")}
        </h2>

        <section>
          <img src={fotoCv} alt="" />

          <div>
            <p>
              {t("aboutMe.descriptionFirst")}
              <br />
              <br />
              {t("aboutMe.descriptionSecond")}
            </p>
          </div>
        </section>
      </motion.section>
    </>
  );
}
