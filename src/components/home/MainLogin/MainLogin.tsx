import styles from "./MainLogin.module.sass"
import Image from "next/image"
import '@fortawesome/fontawesome-free/css/all.css'
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"

export const MainLogin = () => {
    return (
        <section className= {styles.containerLogin} >

            <div className={styles.containerContent}>

                <div className={styles.containerImg}>
                    <Image
                        src="/images/Logo IsaLash Academy 3.png" 
                        alt="Logo"  
                        priority={false}
                        fill 
                    />
                </div>

                <h3>Ingresar o crear una cuenta con:</h3>

                <div className={styles.containerEmail}>
                    <label htmlFor="email">Correo electrónico</label>
                    <input className={styles.boxEmail} type="email" id="email" name="email" placeholder="correo@example.com" />
                    <button className={styles.sendButton} type="submit">Continuar</button>
                </div>

                <h4>o</h4>

                <div className={styles.containerSession}>
                    <button>
                        <span><i className="fa-brands fa-google"></i></span>
                        <span>Continuar con google</span>
                    </button>
                    <button>
                        <span><i className="fa-brands fa-facebook-f"></i></span>
                        <span>Continuar con facebook</span>
                    </button>
                </div>

            </div>

        </section>
    )
}