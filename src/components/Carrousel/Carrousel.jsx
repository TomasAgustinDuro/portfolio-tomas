import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import styles from "./carrousel.module.css";
import { useTranslation } from "react-i18next";


export function Carrousel() {
  const images = ["python.png", "movil.png", "web.png", "programador.png"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImages, setSelectedImage] = useState(images[0]);

  const updateSelectedImage = (direction) => {
    let nextIndex = selectedIndex;
    if (direction === "next") {
      nextIndex = (selectedIndex + 1) % images.length;
    } else if (direction === "prev") {
      nextIndex = (selectedIndex - 1 + images.length) % images.length;
    }
    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const previous = () => updateSelectedImage("prev");
  const next = () => updateSelectedImage("next");

  const { t, i18n } = useTranslation();

  return (
    <>
      <section className={styles.carrousel} id="carrousel">
        <h2>
          {" "}
          <FaGraduationCap /> {t("certificados.title")}{" "}
        </h2>

        <div className={styles.contenedorCarrousel}>
          <button onClick={previous}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-badge-left"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              stroke="#fff"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11 17h6l-4 -5l4 -5h-6l-4 5z" />
            </svg>
          </button>

          <a href={`/img/${selectedImages}`} target="blank">
            <img src={`/img/${selectedImages}`} alt={selectedImages} />
          </a>
          <button onClick={next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-badge-right"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              stroke="#fff"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
