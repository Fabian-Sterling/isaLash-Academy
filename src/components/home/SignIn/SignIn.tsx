"use client" 

import styles from "./signIn.module.sass"
import Image from "next/image"
import '@fortawesome/fontawesome-free/css/all.css'
import { useState, FormEvent } from "react"
import { signIn } from "next-auth/react"
import Link from "next/link"


export const SignIn: React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });

        if (result?.error) {
            console.log('Error:', result.error)
        } else {
            console.log('Inicio de sesion exitoso'),
            window.location.href = '/dashboard'
        }
    }

    const handleProviderSignIn = (provider: string) => {
        signIn(provider, { callbackUrl: '/'})
    }

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

                <form className={styles.containerEmail} onSubmit={handleSubmit}>
                    <label htmlFor="email">Correo electrónico</label>
                    <input 
                        className={styles.boxEmail}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="correo@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />

                    <label htmlFor="password">Contraseña</label>
                    <input
                        className={styles.boxEmail}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={styles.containerRegisterNew}>
                        <span>¿No tienes cuenta?</span>
                        <Link href="/auth/Register"> Suscríbete </Link>
                    </div>
                    <button className={styles.sendButton} type="submit">Continuar</button>
                </form>

                <h4>o</h4>

                <div className={styles.containerSession}>
                    <button onClick={() => handleProviderSignIn('Google')}>
                        <span><i className="fa-brands fa-google"></i></span>
                        <span>Continuar con Google</span>
                    </button>
                    <button onClick={() => handleProviderSignIn('facebook')}>
                        <span><i className="fa-brands fa-facebook-f"></i></span>
                        <span>Continuar con Facebook</span>
                    </button>
                </div>

            </div>

        </section>
    )
}