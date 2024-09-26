"use client"

import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames/bind'
import { useState } from 'react'
import styles from './Herader.module.sass'


export const Header = () => {


    const [hasHamburger, setHamburger] = useState (false); 

    const handleClick = () => setHamburger (!hasHamburger);

    const cx = classNames.bind(styles);
    
    const buttonStyles = cx('hamburger__menu', {
        'hamburger__menu--active': hasHamburger
    })

    const navMenuStyles = cx('nav__menu', {
        'nav__menu--active': hasHamburger
    });

    console.log(buttonStyles);

    
    return (
        
        <header className= {styles.header}>

            <div className={styles.container__logo}>
                    <Image
                        src="/images/logo IsaLash Academy 3.png"
                        alt="Logo IsaLash"
                        fill
                />
            </div>
        
            
            <button onClick={handleClick} className={buttonStyles}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </button>
        

            <nav className={navMenuStyles}>
                
                <ul>
                    {/*<Link href="#">
                        Home
                    </Link>*/} 
                    <Link href="#">
                        Cursos
                    </Link>
                        
                    <Link href="#">
                        Suscripción
                    </Link>
                    <Link href="#">
                        Receñas
                    </Link>
                    
                </ul>

                <div className={styles.buttons}>
                    <button>
                        <Link href="/auth/SignIn"> <span>Acceder</span> </Link>
                    </button>

                    <button>
                        <a href="/auth/Register">Regístrate</a>
                    </button>
                </div>
            </nav>

        </header>
        
    )
}
