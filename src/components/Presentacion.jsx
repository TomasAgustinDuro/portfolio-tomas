import fotoCv from "/src/img/fotoCv.png";

export function Presentacion() {
  return (
    <>
      <main >
        <section className="main-presentacion">
          <div className="presentacion-contenedor-texto">
            <p className="presentacion-texto-nombre">
              <span>👋</span> Hola, soy Tomas
            </p>
            <h1>Realizo paginas web</h1>
            <p className="presentacion-texto-descripcion">
              Soy
              <span id="presentacion-front"> Frontend Developer</span>. Estudio
              la tecnicatura en Desarrollo Web y Aplicaciones moviles.
            </p>
            <div className="presentacion-buttons">
              <button className="btn">Contactame</button>
              <button className="btn">Linkedin</button>
              <button className="btn">Github</button>
            </div>
          </div>

          <img src={fotoCv} id="fotoCv" alt="foto de carnet" />
        </section>
      </main>
    </>
  );
}
