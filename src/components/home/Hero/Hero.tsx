"use client"

import styles from './Hero.module.sass' 
import Image from 'next/image'
import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css'


export const Hero = () => {
    
    const [mostrarVideo, setMostrarVideo] = useState(false);
    
    const toggleVideo = () => {
        setMostrarVideo(!mostrarVideo);
    };
    
    const cerrarVideo = () => {
        setMostrarVideo(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <section className={styles.Hero}>

                {mostrarVideo && (
                    <div className={`${styles.videoContainer} ${mostrarVideo ? styles.visible : ''}`}>
                        <button className={styles.btnClose} onClick={cerrarVideo}>X</button>
                        <video controls controlsList="nodownload"> 
                            <source src='/video/isaLashs.mp4.mp4' type='video/mp4'/>
                            
                        </video>

                    </div>
                )}

                <div className={styles.heroContent}>

                    <div className={styles.containerImgCard}>
                        
                        <div className= {styles.containerImg}>
                            <Image
                                src="/images/website plataforma edu (1).png" 
                                alt="lash trainer"  
                                priority={false}
                                fill
                            />
                        </div>

                        <div className= {styles.card}>
                            <div className={styles.container__text}>
                                <div className={styles.icon}>
                                    <i className="fa-solid fa-bullhorn"></i>
                                </div>
                                <div className={styles.container__text__courses}>
                                    <p className={styles.text__courses}>20 Courses</p>
                                    <p>Extensiones de pestañas</p>
                                </div>
                            </div>

                            <div className={styles.container__text}>
                                <div className={styles.icon}>
                                    <i className="fa-solid fa-bullhorn"></i>
                                </div>
                                <div className={styles.container__text__courses}>
                                    <p className={styles.text__courses}>15 Courses</p>
                                    <p>Lifting de pestañas</p>
                                </div>
                            </div>

                            <div className={styles.container__text}>
                                <div className={styles.icon}>
                                    <i className="fa-solid fa-bullhorn"></i>
                                </div>
                                <div className={styles.container__text__courses}>
                                    <p className={styles.text__courses}>15 Courses</p>
                                    <p>Laminado de cejas</p>
                                </div>
                            </div>

                            <div className={styles.container__text}>
                                <div className={styles.icon}>
                                    <i className="fa-solid fa-bullhorn"></i>
                                </div>
                                <div className={styles.container__text__courses}>
                                    <p className={styles.text__courses}>10 Courses</p>
                                    <p>Sombreado de cejas con henna</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.additional__content}>
                        <h1>Enciende tu aprendizaje 
                            ¡Donde sea que estés!</h1>
                        <p className={styles.container__welcome}>Bienvenidos a nuestra plataforma de capacitación online, donde las oportunidades de crecimiento están a solo unos clics de distancia. No importa en qué rincón del mundo te encuentres, la educación ahora es más accesible que nunca.</p>
                        <div className={styles.container__button}>
                            <button className={styles.button1}>Ver Cursos</button>
                            <div className={styles.containerButton2__Icon} onClick={toggleVideo}>
                                <div className={styles.containerIcon}><i className="fa-solid fa-play"></i></div>
                                <button className={styles.button2}>Ver Video</button>
                            </div>
                        </div>

                        <p className={styles.container__paragraph}>Actualización Constante</p>

                        <div className={styles.container__studens}>
                            <p className={styles.container__amount}>50K <span>estudiantes</span></p>
                            <p className={styles.container__courses}>4+ <span>Cursos</span></p>
                        </div>
                    </div>
                </div>

        </section>
    )
}