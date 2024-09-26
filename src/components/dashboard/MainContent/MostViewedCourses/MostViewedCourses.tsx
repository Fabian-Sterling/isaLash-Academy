'use client'

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Carousel } from 'app/components/dashboard/MainContent/Carousel'
import styles from './MostViewedCourses.module.sass'
import Link from "next/link"

interface Curso {
    id: string
    nombre: string
    descripcion: string
    videoUrl?: string
    imageUrl?: string
    views: number
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

interface CursosMasVistosResponse {
    data: Curso[]
    total: number
    page: number
    lastPage: number
}


export const MostViewedCourses: React.FC = () => {

    const [cursos, setCursos] = useState<Curso[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [page, setPage] = useState<number>(1)
    const [lastPage, setLastPage] = useState<number>(1)
    const limit = 5 // Puedes ajustar el límite según lo necesites
    const [activeCourseId, setActiveCourseId] = useState<string | null>(null)

    useEffect(() => {
        const fetchCursosMasVistos = async () => {
            try {
                const response = await fetch(`/api/cursosMasVistos?limit=${limit}&page=${page}`)
                if (!response.ok) {
                    throw new Error('Error al obtener los cursos más vistos')
                }
                const data: CursosMasVistosResponse = await response.json()
                setCursos(prevCursos => {
                    const nuevosCursos = data.data.filter(
                        nuevoCurso => !prevCursos.some(curso => curso.id === nuevoCurso.id)
                    )
                    return [...prevCursos, ...nuevosCursos]
                })
                setLastPage(data.lastPage)
            } catch (error) {
                console.error('Error fetching most viewed courses:', error)
                setError('No se pudieron cargar los cursos más vistos.')
            } finally {
                setLoading(false)
            }
        }

        fetchCursosMasVistos()
    }, [page])

    const handleCardClick = (id: string) => {
        setActiveCourseId(prevId => (prevId === id ? null : id))
    }

    const handleLoadMore = () => {
        if (page < lastPage) {
            setPage(prevPage => prevPage + 1)
        }
    }

    if (loading && page === 1) {
        return <div className={styles.loading}>Cargando cursos más vistos...</div>
    }

    if (error) {
        return <div className={styles.error}>{error}</div>
    }

    return (
        <section className={styles.MostSection}>
            <h2>Los cursos más vistos</h2>
            <Carousel>
                {cursos.map(course => (
                    <div 
                        key={course.id} 
                        className={styles.MostCourseCard}
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
                        <div className={styles.MostContainerImg}>
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
                        <div className={styles.MostCourseInfo}>
                            <h3>{course.nombre}</h3>
                            <p>{course.clases.length} Lecciones</p>
                            
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