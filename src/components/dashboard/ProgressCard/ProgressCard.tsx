import React from 'react'
import styles from './ProgressCard.module.sass'

interface CourseProgress {
    courseName: string
    progress: number
}

interface ProgressCardProps {
    enrolledProgress: number
    enrolledTotal: number
    platformProgress: number
    platformTotal: number
    courses: CourseProgress[]
}

export const ProgressCard: React.FC<ProgressCardProps> = ({ 
    enrolledProgress, 
    enrolledTotal, 
    platformProgress, 
    platformTotal, 
    courses 
}) => {
    const platformPercentage = (platformProgress / platformTotal) * 100;
    const enrolledPercentage = (enrolledProgress / enrolledTotal) * 100;

    return (
        <div className={styles.progressCard}>
            <div className={styles.progressSection}>
                <div className={styles.containerProgress}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24" height="24" fill="currentColor">
                        <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
                    </svg>
                    <div className={styles.numberCourses}>
                        <h2>Mi Progreso</h2>
                        <h3>8 cursos</h3>
                    </div>
                </div>
                <div className={styles.progressLabel}>
                    <span>Progreso de cursos que estoy viendo</span>
                    <span>{platformProgress}/{platformTotal}</span>
                </div>
                <div className={styles.progressBar}>
                    <div 
                        className={styles.progressFill} 
                        style={{ width: `${platformPercentage}%` }} 
                    />
                </div>
            </div>
            
            <div className={styles.progressSection}>
                <div className={styles.containerProgress}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24" height="24" fill="currentColor">
                        <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
                    </svg>
                    <div className={styles.numberCourses}>
                        <h2>Progreso total</h2>
                        <h3>8 cursos</h3>
                    </div>
                </div>
                <div className={styles.progressLabel}>
                    <span>Progreso total en la plataforma</span>
                    <span>{enrolledProgress}/{enrolledTotal}</span>
                </div>
                <div className={styles.progressBar}>
                    <div 
                        className={styles.progressFill} 
                        style={{ width: `${enrolledPercentage}%` }} 
                    />
                </div>
            </div>
        </div>
    )
}


