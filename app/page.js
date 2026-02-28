import Hero       from '@/components/Hero'
import Strip      from '@/components/Strip'
import Courses    from '@/components/Courses'
import Syllabus   from '@/components/Syllabus'
import Instructor from '@/components/Instructor'
import WhyUs      from '@/components/WhyUs'
import Gallery    from '@/components/Gallery'
import Contact    from '@/components/Contact'

export const metadata = {
  title: 'LM Infotech Institute | Mobile Repairing Courses — Batch 1',
  description:
    'Join Batch 1 of LM Infotech Institute. Learn mobile repairing from H Kumar with 20+ years experience. 1-Month, 3-Month and 6-Month courses covering chip-level repair, micro-soldering, diagnostics and more.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Strip />
      <Courses />
      <Syllabus />
      <Instructor />
      <WhyUs />
      <Gallery />
      <Contact />
    </>
  )
}
