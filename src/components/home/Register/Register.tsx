"use client"

import styles from './Register.module.sass'
import Image from 'next/image'
import '@fortawesome/fontawesome-free/css/all.css'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import axios from 'axios'



export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState ('')
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError ('');

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await axios.post('/api/auth/register', {
                email,
                password,
            });

            if (response.status === 201) {
                router.push('/payment')
            } else {
                setError('Error al registrar el usuario')
            }
        } catch (error) {
            setError('Error al registrar el usuario')
        }
    };

    return (
        <section className= {styles.containerRegister} >

            <div className={styles.containerContentRegister}>

                <div className={styles.containerImg}>
                    <Image
                        src="/images/Logo IsaLash Academy 3.png" 
                        alt="Logo"  
                        priority={false}
                        fill 
                    />
                </div>

                <h3>Registrarse o crear cuenta con:</h3>

                <form className={styles.containerEmailRegister} onSubmit={handleSubmit}>
                    <label htmlFor="email">Correo electrónico</label>
                    <input 
                        className={styles.boxEmailRegister}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="correo@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Contraseña</label>
                    <input
                        className={styles.boxEmailRegister}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Confirmar Contraseña</label>
                    <input
                        className={styles.boxEmailRegister}
                        type="password"
                        id="confirmPassword"
                        name="password"
                        placeholder="********"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    {error && <p className={styles.errorRegister}>error</p>}
                    <button className={styles.sendButtonRegister} type="submit">Registrar</button>
                </form>

                

                <h4>o</h4>

                <div className={styles.containerProviderRegister}>
                    <button onClick={() => signIn('Google', { callbackUrl: '/payment' })}>
                        <span><i className="fa-brands fa-google"></i></span>
                        <span>Registrarse con Google</span>
                    </button>
                    <button onClick={() => signIn('facebook', { callbackUrl: '/payment' })}>
                        <span><i className="fa-brands fa-facebook-f"></i></span>
                        <span>Registrarse con Facebook</span>
                    </button>
                </div>

            </div>

        </section>
    )
}