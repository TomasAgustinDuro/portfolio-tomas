import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

export function Carrousel() {
  const images = ["python.png", "movil.png", "web.png", "programador.png"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImages, setSelectedImage] = useState(images[0]);

  const selectedNewImage = (index, images, next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previous = () => {
    selectedNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectedNewImage(selectedIndex, images);
  };

  return (
    <>
      <section className="carrousel" id="carrousel">
        <h2> <FaGraduationCap /> Certificados</h2>
        
        <div className="contenedor-carrousel"  >
          <button onClick={previous}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-badge-left"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke="#fff"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11 17h6l-4 -5l4 -5h-6l-4 5z" />
            </svg>
          </button>

          
          <img src={`/public/img/${selectedImages}`} alt={selectedImages} />

          <button onClick={next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-badge-right"
              width="32"
              height="32"
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
