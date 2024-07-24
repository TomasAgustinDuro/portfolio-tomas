/* eslint-disable react/prop-types */
import { FiGithub, FiLink } from "react-icons/fi";

export function Item({ img, titulo, tecnologia, texto, github, preview }) {
  const handleGithubClick = () => {
    window.open(github, "_blank");
  };

  const handlePreviewClick = () => {
    window.open(preview, "_blank")
  }

  return (
    <div className="item">
      <div className="item-imagen">
        <img src={img} alt={titulo} />
      </div>

      <h3>{titulo}</h3>

      <div className="item-tecnologias">{tecnologia}</div>

      <div className="item-texto">{texto}</div>

      <div className="item-direcciones">
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
