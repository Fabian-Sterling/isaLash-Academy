import styles from './Courses.module.sass'
import Image from 'next/image'
import '@fortawesome/fontawesome-free/css/all.css'


export const Courses = () => {
    return (
        <section className={styles.sectionCourses}>
            <div className={styles.sectionCorusesContainer}>
                <div className={styles.containerTitle}>
                    <h1>Especialízate en las áreas de mayor crecimiento en la industria de la belleza</h1>
                    <div className={styles.containerButtonNext}>
                        <button><i className="fa-solid fa-arrow-left"></i></button>
                        <button><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

                <div className={styles.containerParagraph}>
                <p>¿Conoces a alguien que se haya puesto extensiones de pestañas pelo a pelo, o que haya optado por un procedimiento mas natural como el Lifting de pestañas?</p>
                <p>Según estadísticas, al menos 1 de tus amigas los ha probado y es que estas técnicas cada dia son mas demandadas.</p>
                </div>

                <div className={styles.containerCard}>
                    <div className={styles.CardCourses}>
                        <div className={styles.containerImg}>
                            <Image
                            src="/images/Hibridas.jpg" 
                            alt="Pestañas"
                            fill
                            priority = {false}
                            />
                            
                        </div>
                        <div className={styles.containerCardTitle}>
                            <div className={styles.containerInfo}>
                                <h3>Extensiones de pestañas</h3>
                                <span>4.5</span>
                            </div>
                            <p>Obtén el mejor curso, adquiere conocimientos y brilla para tu futura carrera.</p>
                            <div className={styles.ContainerPriceButton}>
                                <div className={styles.containerPreceSubscription}>
                                    <span className={styles.price}>$40USD</span>
                                    <span>Suscripcion mensual</span>
                                </div>
                                
                                <button>Inicia Ahora</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}