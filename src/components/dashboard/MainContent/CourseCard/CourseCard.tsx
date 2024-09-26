// src/components/dashboard/MainContent/CourseCard/CourseCard.tsx

'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './CourseCard.module.sass'

interface Curso {
    id: string
    nombre: string
    descripcion?: string
    lecciones?: number
    videoUrl?: string
    imageUrl?: string
    views?: number
    clases?: Clase[]
    createdAt?: string
    updatedAt?: string
    usuarioId?: string
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

interface CourseCardProps {
    course: Curso
    type?: 'latest' | 'mostViewed' | 'discover' // Opcional: para manejar estilos específicos si es necesario
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, type }) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const handleMouseEnter = () => {
        setIsActive(true)
    }

    const handleMouseLeave = () => {
        setIsActive(false)
    }

    const handleClick = () => {
        setIsActive(prev => !prev)
    }

    return (
        <div 
            className={styles.courseCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            tabIndex={0} // Hacer la tarjeta enfocada con teclado
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleClick()
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
                {type === 'discover' ? (
                    <p>{course.lecciones} lecciones</p>
                ) : type === 'latest' || type === 'mostViewed' ? (
                    <p>{course.clases?.length || 0} lecciones</p>
                ) : null}
            </div>

            {/* Botones que se mostrarán al interactuar */}
            {isActive && (
                <div className={styles.buttonsOverlay}>
                    <Link 
                        href={`/curso/${course.id}/PresentacionCursos`} 
                        className={styles.button}
                        aria-label={`Ver información de ${course.nombre}`}
                        onClick={(e) => e.stopPropagation()} // Evitar que el click en el botón cierre los botones
                    >
                        Ver Información
                    </Link>
                    <Link 
                        href={`/curso/${course.id}/PanelClases`} 
                        className={styles.button}
                        aria-label={`Iniciar curso ${course.nombre}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        Iniciar Curso
                    </Link>
                </div>
            )}
        </div>
    )
}
