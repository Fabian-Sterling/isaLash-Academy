import React from 'react'
import styles from './HeroDashboard.module.sass'
import Image from 'next/image';

export const HeroDashboard: React.FC = () => {
    const placeholderCourses = [
        {
            id: 1,
            title: 'Extensiones de pestañas',
            status: 'Completed',
            imageUrl: '/images/Extensiones.png',
        },
        {
            id: 2,
            title: 'The Basics of Makeup',
            status: 'In Progress',
            imageUrl: '/images/Lifting.png',
        }
    ];
    
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.welcomeMessage}>
                    <h1>Bienvenida a IsaLash Academy</h1>
                    <button className={styles.findCourseButton}>Encuentra un curso</button>
                </div>

                <div className={styles.courseTaking}>
                    <h2>Cursos que estas tomando</h2>
                    <div className={styles.carouselContainer}>
                        <button className={styles.prevButton}>&#8249;</button>
                        <div className={styles.coursesContainer}>
                            {placeholderCourses.map(course => (
                                <div key={course.id} className={styles.courseCard}>
                                    <div className={styles.containerImg}>
                                        <Image 
                                            src={course.imageUrl}
                                            alt={course.title}
                                            fill
                                            className={styles.courseImage}
                                        />
                                    </div>
                                    <div className={styles.courseInfo}>
                                        <h3>{course.title}</h3>
                                        <p>{course.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className={styles.nextButton}>&#8250;</button>
                    </div>
                </div>
            </div>
            
        </section>
    )
}