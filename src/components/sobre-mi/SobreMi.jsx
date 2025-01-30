import fotoCv from "/img/fotoCv.png";
import { IoPersonOutline } from "react-icons/io5";
import styles from "./sobreMi.module.css";
import { useTranslation } from "react-i18next";

export function SobreMi() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section className={styles.sobreMi}>
        <h2>
          <IoPersonOutline /> {t("aboutMe.title")}
        </h2>

        <main>
          <img src={fotoCv} alt="" />

          <div>
            <p>
              {t("aboutMe.descriptionFirst")}
              <br />
              <br />
              {t("aboutMe.descriptionSecond")}
            </p>
          </div>
        </main>
      </section>
    </>
  );
}
