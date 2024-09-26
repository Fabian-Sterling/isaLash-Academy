'use client'

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Carousel } from 'app/components/dashboard/MainContent/Carousel'
import styles from './LatesCoursesLaunched.module.sass'
import Link from "next/link"

interface Curso {
    id: string
    nombre: string
    descripcion: string
    videoUrl?: string
    imageUrl?: string
    createdAt: string
    updatedAt: string
    usuarioId: string
    clases: Clase[]
    usuario?: {
        id: string
        name: string
        email: string
    }
}

interface Clase {
    id: string
    nombre: string
    descripcion: string
    contenido: string
    videoUrl?: string
    cursoId: string
}

export const LatestCoursesLaunched: React.FC = () => {
    const [cursos, setCursos] = useState<Curso[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [activeCourseId, setActiveCourseId] = useState<string | null>(null)
    const [limit, setLimit] = useState<number>(5) // Puedes ajustar el límite según lo necesites

    useEffect(() => {
        const fetchUltimosCursos = async () => {
            try {
                const response = await fetch(`/api/ultimosCursos?limit=${limit}`)
                if (!response.ok) {
                    throw new Error('Error al obtener los últimos cursos')
                }
                const data: Curso[] = await response.json()
                setCursos(data)
            } catch (error) {
                console.error('Error fetching latest courses:', error)
                setError('No se pudieron cargar los últimos cursos.')
            } finally {
                setLoading(false)
            }
        }

        fetchUltimosCursos()
    }, [limit])

    const handleCardClick = (id: string) => {
        setActiveCourseId(prevId => (prevId === id ? null : id))
    }

    if (loading) {
        return <div className={styles.loading}>Cargando últimos cursos...</div>
    }

    if (error) {
        return <div className={styles.error}>{error}</div>
    }

    return (
        <section className={styles.LatestSection}>
            <h2>Últimos Cursos Lanzados</h2>
            <Carousel>
                {cursos.map(course => (
                    <div 
                        key={course.id} 
                        className={styles.LatestCourseCard}
                        onClick={() => handleCardClick(course.id)}
                        onMouseEnter={() => setActiveCourseId(course.id)}
                        onMouseLeave={() => setActiveCourseId(null)}
                        tabIndex={0} // Hacer la tarjeta enfocada con teclado
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleCardClick(course.id)
                            }
                        }}
                        aria-label={`Curso: ${course.nombre}`}
                        >
                    

                        <div className={styles.LatestContainerImg}>
                            {course.imageUrl ? (
                                <Image
                                    src={course.imageUrl}
                                    alt={course.nombre}
                                    fill
                                    className={styles.image}
                                />
                            ) : (
                                <div className={styles.noImage}>Sin Imagen</div>
                            )}
                        </div>
                        <div className={styles.LatestCourseInfo}>
                            <h3>{course.nombre}</h3>
                            <p>{course.clases.length} lecciones</p>
                        </div>

                        {/* Botones que se mostrarán al pasar el cursor o al hacer clic */}
                        {activeCourseId === course.id && (
                            <div className={styles.buttonsOverlay}>
                                <Link 
                                    href={`/Curso/${course.id}/PresentacionCursos`} 
                                    className={styles.button}
                                    aria-label={`Ver información de ${course.nombre}`}
                                >
                                    Ver Información
                                </Link>
                                <Link 
                                    href={`/Curso/${course.id}/PanelClases`} 
                                    className={styles.button}
                                    aria-label={`Iniciar curso ${course.nombre}`}
                                >
                                    Iniciar Curso
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </Carousel>
            
        </section>
    )
}



