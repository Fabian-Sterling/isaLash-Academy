import Image from 'next/image'
import styles from './headerDashboard.module.sass'
import Link from 'next/link'
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'

export const HeaderDashboard = () => {

    return (
        <header className={styles.Header}>
            <div className={styles.containerLogo}>
                    <Image
                        src="/images/logo IsaLash Academy 3.png"
                        alt="Logo IsaLash"
                        fill
                />
            </div>
            <div className={styles.searchContainer}>
                <form action="/search" method='get'>
                    
                    <button type='submit' className={styles.searchButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                        </svg>
                    </button>
                    <input type="text" name='query' className={styles.searchBox} placeholder='¿que quieres estudiar?' required />
                    
                </form>
            </div>
            
            <div className={styles.menuContainer}>
                <button className={styles.menuButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30">
                        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
                    </svg>
                    
                    <span>Usuario</span>
                </button>
                <div className={styles.menuDropdown}>
                    <Link href="/perfil">Ver mi perfil</Link>
                    <Link href="/suscripcion">Mi suscripción</Link>
                    <Link href="/contacto">Contáctanos</Link>
                    <Link href="/logout">Cerrar sesión</Link>
                </div>
            </div>
            

        </header>
    )
}