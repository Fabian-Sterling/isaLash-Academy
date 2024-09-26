'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import styles from './Panel.module.sass'

interface Clase {
    id: string
    nombre: string
    descripcion: string
    contenido: string
    videoUrl?: string
    cursoId: string
}

export const PanelClases: React.FC = () => {
    const params = useParams()
    const [clases, setClases] = useState<Clase[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchClases = async () => {
            try {
                const response = await fetch(`/api/cursos/${params.id}/PanelClases`)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data: Clase[] = await response.json()
                setClases(data)
            } catch (error) {
                console.error('Error fetching course classes:', error)
                setError('Error fetching course classes')
            } finally {
                setLoading(false)
            }
        }

        fetchClases()
    }, [params.id])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    if (clases.length === 0) {
        return <div>No classes found for this course.</div>
    }

    return (
        <div className={styles.panelClases}>
            <h1>Clases del Curso</h1>
            <ul>
                {clases.map(clase => (
                    <li key={clase.id} className={styles.clase}>
                        <h2>{clase.nombre}</h2>
                        <p>{clase.descripcion}</p>
                        <Link href={`/curso/${params.id}/clase/${clase.id}`} className={styles.button}>
                            Ver Clase
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PanelClases


