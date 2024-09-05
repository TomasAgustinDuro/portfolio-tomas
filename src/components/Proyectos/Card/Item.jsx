/* eslint-disable react/prop-types */
import { FiGithub, FiLink } from "react-icons/fi";
import styles from "./item.module.css"

export function Item({ img, titulo, tecnologia, texto, github, preview }) {
  const handleGithubClick = () => {
    window.open(github, "_blank");
  };

  const handlePreviewClick = () => {
    window.open(preview, "_blank")
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemImagen}>
        <img src={img} alt={titulo} />
      </div>

      <h3>{titulo}</h3>

      <div className={styles.itemTecnologias}>{tecnologia}</div>

      <div className={styles.itemTexto}>
        <p>
        {texto}
        </p>
      </div>

      <div className={styles.itemDirecciones}>
        <button className="btn" onClick={handleGithubClick}>
          <FiGithub />
          Code
        </button>
        <button className="btn" onClick={handlePreviewClick}>
          <FiLink />
          Preview
        </button>
      </div>
    </div>
  );
}
