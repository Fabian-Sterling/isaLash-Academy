import { ProgressCard } from 'app/components/dashboard/ProgressCard'
import { HeaderDashboard } from "app/components/dashboard/HeaderDashboard"
import { HeroDashboard } from 'app/components/dashboard/HeroDashboard'
import { DescubreOurCurses } from 'app/components/dashboard/MainContent/DescubreOurCurses'
import { LatestCoursesLaunched } from 'app/components/dashboard/MainContent/LatestCoursesLaunched'
import { MostViewedCourses } from 'app/components/dashboard/MainContent/MostViewedCourses'
import styles from './dashboard.module.sass'

export default function dashboard () {
    
    const platformProgress = 8;
    const platformTotal = 10;
    const enrolledProgress = 8;
    const enrolledTotal = 100;

    const courses = [
        { courseName: 'Curso 1', progress: 70 }, 
        { courseName: 'Curso 2', progress: 50 },
        { courseName: 'Curso 3', progress: 90 },
    ]

    return (
        <main className={styles.main}>
            
            <div className={styles.sectionContent}>
                <HeaderDashboard />
                <HeroDashboard />
                <DescubreOurCurses />
                <LatestCoursesLaunched />
                <MostViewedCourses />
            </div>

            <aside>
                <ProgressCard
                    enrolledProgress={enrolledProgress} 
                    enrolledTotal={enrolledTotal} 
                    platformProgress={platformProgress} 
                    platformTotal={platformTotal} 
                    courses={courses}
                />
            </aside>

        </main>
    )
}