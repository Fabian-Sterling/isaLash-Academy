'use client'

import React, { useRef } from 'react'
import styles from './Carousel.module.sass'

interface CarouselProps {
    children: React.ReactNode
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const carouselRef = useRef<HTMLDivElement>(null)

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    }

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    }

    return (
        <div className={styles.carouselContainer}>
            <button onClick={scrollLeft} className={styles.scrollButton}>
                &#8249;
            </button>
            <div className={styles.carousel} ref={carouselRef}>
                {children}
            </div>
            <button onClick={scrollRight} className={styles.scrollButton}>
                &#8250;
            </button>
        </div>
    )
}
