import Image  from 'next/image'
import { Header } from 'app/components/shared/Header'
import { Footer } from 'app/components/shared/Footer'

import { Courses } from 'app/components/home/Courses'
import { Hero } from 'app/components/home/Hero'
import { MainProducts } from 'app/components/home/MainProducts'

export default function Home() {
  return (
    <main >
      <Header />

      <Hero />

      <Courses />

      <Footer />
      
    </main>
  )
}
