'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import styles from './Presentacion.module.sass'
import Link from 'next/link'
import Image from 'next/image'

interface Clase {
    id: string
    nombre: string
    descripcion: string
    contenido: string
    videoUrl?: string
    cursoId: string
}

interface Curso {
    id: string
    nombre: string
    descripcion: string
    videoUrl?: string
    createdAt: string
    updatedAt: string
    clases: Clase[]
    imageUrl?: string
}

export const PresentacionCursos: React.FC = () => {

    const params = useParams()
    const [curso, setCurso] = useState<Curso | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchCurso = async () => {
            try {
                const response = await fetch(`/api/cursos/${params.id}/PresentacionCursos`)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data: Curso = await response.json()
                setCurso(data)
            } catch (error) {
                console.error('Error fetching course presentation:', error)
                setError('Error fetching course presentation')
            } finally {
                setLoading(false)
            }
        }

        fetchCurso()
    }, [params.id])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    if (!curso) {
        return <div>Course not found</div>
    }

    return (
        <div className={styles.presentacion}>
            <h1>{curso.nombre}</h1>
        
            {curso.imageUrl && ( 
                <Image src={curso.imageUrl} alt={curso.nombre} className={styles.imagen}/>
            )}
            
        
            <p>{curso.descripcion}</p>

            {curso.videoUrl && (
                <video controls className={styles.video}>
                    <source src={curso.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}

            <h2>Contenido del Curso</h2>
            <ul>
                {curso.clases.map((clase) => (
                    <li key={clase.id}>{clase.nombre}</li>
                ))}
            </ul>

            <Link href={`/Curso/${curso.id}/PanelClases`}>
                <button>Iniciar Curso</button>
            </Link>
        </div>
    )
}



