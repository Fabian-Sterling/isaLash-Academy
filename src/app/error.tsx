"use client"

import Image from 'next/image'
import styles from 'app/sass/global-error.module.sass'

export default function GlobalError({ reset }: ErrorPageProps) {
    return(
        <main>
            <h1>ha ocurrido un error</h1>
            <button onClick={reset}>Volver a intentarlo</button>
        </main>
    )
}