import Image from "next/image"
import styles from "./Footer.module.sass"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterContainerImgList}>
                <div className={styles.FooterContenedorImg}>
                    <Image
                        src="/images/LogoIsaLashBlanco.png"
                        alt="Logo IsaLash Academy" 
                        fill
                    />
                </div>
        
                <div className={styles.FooterContainerList}>
                    <ul>
                        <Link href="/">
                            <div className={styles.containerLine}></div>
                            <span>Belleza</span>
                        </Link>

                        <Link href="/">
                            <div className={styles.containerLine}></div>
                            <span>Liderazgo</span>
                        </Link>

                        <Link href="/">
                            <div className={styles.containerLine}></div>
                            <span>Negocios y emprendimiento</span>
                        </Link>

                        <Link href="/">
                            <div className={styles.containerLine}></div>
                            <span>Contenido Digital</span>
                        </Link>

                        <Link href="/">
                            <div className={styles.containerLine}></div>
                            <span>Marketing</span>
                        </Link>
                        
                    </ul>
                </div>
                
                <div className={styles.containerMessage}>
                    <p>¿Necesitas ayuda para la carrera de tus sueños? confia en nosotros. Con Isa Lash Academy, el estudio se vuelve mucho más fácil y ameno.</p>
                        
                    <div className={styles.containerSocialNetworks}>
                        <Link href="/"><i className="fa-brands fa-instagram"></i></Link>
                        <Link href="/"><i className="fa-brands fa-facebook"></i></Link>
                        <Link href="/"><i className="fa-brands fa-linkedin"></i></Link>
                    </div>
                </div>
                
            </div>

            <div className={styles.FooterContainerListPqr}>
                <div className={styles.containerListPqr}>
                    <ul>
                        <Link href="/">Preguntas Frecuentes</Link>
                        <Link href="/">Contactanos</Link>
                        <Link href="/">Terminos y condiciones</Link>
                        <Link href="/">Preguntas Privacidad</Link>
                    </ul>
                </div>
            </div>

            <div className={styles.containerSeparatorLine}></div>

            <div className={styles.containerFinish}>
                <p>Isa Lash Academy 2024</p>
            </div>
        </footer>
    )
}