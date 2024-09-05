import styles from "./footer.module.css"

export function Footer () {
    return(
        <footer className={styles.footer} id="footer">
            <div className="copyright">
                2024 inspirado en el portfolio de Midudev.
            </div>

            <div className={styles.links}>
                <a href="#sobre-mi">Sobre mi</a>
                <a href="durotomaas@gmail.com">Contacto</a>
            </div>
        </footer>
    )
}