'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Carousel } from 'app/components/dashboard/MainContent/Carousel'
import styles from './DescubreNuestrosCursos.module.sass'
import Link from 'next/link'

interface Course {
    id: string
    nombre: string
    lecciones: number
    imageUrl?: string
}

export const DescubreOurCurses: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [activeCourseId, setActiveCourseId] = useState<string | null>(null)

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('/api/cursosDashboard')
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data: Course[] = await response.json()
                setCourses(data)
            } catch (error) {
                console.error('Error fetching courses:', error)
                setError('Error fetching courses')
            } finally {
                setLoading(false)
            }
        }

        fetchCourses()
    }, [])

    const handleCardClick = (id: string) => {
        setActiveCourseId(prevId => (prevId === id ? null : id))
    }

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <section className={styles.section}>
            <h2>Descubre Nuestros Cursos</h2>
            <Carousel>
                {courses.map(course => (
                    <div 
                        key={course.id} 
                        className={styles.courseCard}
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
                        <div className={styles.containerImg}>
                            {course.imageUrl ? (
                                <Image
                                    src={course.imageUrl} 
                                    alt={course.nombre}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 200px" // Ajusta según necesites
                                />
                            ) : (
                                <div className={styles.noImage}>No Image</div>
                            )}
                            
                        </div>
                        <div className={styles.courseInfo}>
                            <h3>{course.nombre}</h3>
                            <p>{course.lecciones} lecciones</p>
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