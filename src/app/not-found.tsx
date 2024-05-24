import Image from 'next/image'
import Link from 'next/link'
import styles from 'app/sass/not-found.module.sass'

export default function NotFound () {
    return (
        <main className={styles.main}>
            <div className={styles.containerImgText}>
                <div className={styles.containerImg}>
                    <Image
                        src="/images/error404.png"
                        alt='Error'
                        fill
                    />
                </div>
                
                <div className={styles.containertext}>
                    
                    <h1>404</h1>

                    <p>Lo sentimos, la pagina que estas buscando no existe.</p>

                    <button>HOME</button>
                </div>
            </div>
        </main>
    )
}