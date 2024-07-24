import fotoCv from "../assets/img/fotoCv.png";

export function SobreMi() {
  return (
    <>
      <section className="section-sobre-mi">
        <header>Sobre mi</header>

        <main>
          <img src={fotoCv} alt="" />

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              elit libero. Suspendisse potenti. Nullam id vehicula enim, eget
              varius massa. Morbi sed dignissim eros, et condimentum dolor.
              Fusce molestie felis magna, at ullamcorper turpis sagittis non.
              Pellentesque interdum, lorem iaculis dictum semper, magna neque
              interdum tortor, vitae ultrices nisl nulla eu sem. Vestibulum ac
              ipsum at nisl vehicula hendrerit at quis tellus. Donec vitae eros
              non magna finibus mattis sit amet nec leo. Etiam aliquet ornare
              dolor id dapibus. Vivamus ac convallis mi. Donec non sollicitudin
              est, ut accumsan turpis. In blandit sapien in ligula imperdiet, ac
              feugiat augue vestibulum. Ut elementum consequat arcu id gravida.
            </p>
          </div>

          
        </main>
      </section>
    </>
  );
}
