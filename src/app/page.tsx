import { Header } from 'app/components/shared/Header'
import { Footer } from 'app/components/shared/Footer'

import { Courses } from 'app/components/home/Courses'
import { Hero } from 'app/components/home/Hero'

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
