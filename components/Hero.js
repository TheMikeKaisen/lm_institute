'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const stats = [
  { value: '30+', label: 'Years Instructor Experience' },
  { value: '3',   label: 'Course Tiers Available' },
  { value: '6mo', label: 'Advanced Track Duration' },
  { value: 'NB',  label: 'New Batch — Enroll Now' },
]

export default function Hero() {
  const refs = useRef([])

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(22px)'
      setTimeout(() => {
        if (!el) return
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 120 + i * 120)
    })
  }, [])

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-12 pb-16">
      {/* Background Image & Overlay */}
      <Image 
        src="/images/gallery/classroom-1.jpeg" 
        alt="Instructor teaching in classroom" 
        fill 
        priority
        className="object-cover object-center absolute inset-0 -z-20"
      />
      <div className="absolute inset-0 bg-white/60 backdrop-blur-md -z-10" />

      {/* decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full
                        bg-sky-500/8 blur-[80px]"/>
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full
                        bg-amber-500/6 blur-[80px]"/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[700px] h-[700px] rounded-full bg-sky-100/40 blur-[100px] -z-10"/>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-16 lg:pt-24 pb-12 w-full text-center flex flex-col items-center">
        
        {/* Batch badge */}
        <div ref={el => refs.current[0] = el} className="badge mb-8 w-fit mx-auto">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
          Admissions Open · New Batch
        </div>

        <h1 ref={el => refs.current[1] = el}
            className="font-display text-sky-950 text-5xl lg:text-7xl xl:text-[80px]
                       font-800 leading-[1.0] mb-6">
          Master<br/>
          Mobile<br/>
          <span className="text-sky-gradient">Repairing.</span>
        </h1>

        <p ref={el => refs.current[2] = el}
           className="text-sky-900/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          From screen replacements to chip-level motherboard surgery — learn everything with
          <strong className="text-sky-800 font-600"> H Kumar</strong>, a master technician
          with <strong className="text-sky-800 font-600">30+ Years Experience</strong>.
        </p>

        {/* Course pills */}
        <div ref={el => refs.current[3] = el} className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { dur: '1 Month', label: 'Basics & Assembly', color: 'bg-sky-100 text-sky-700 border-sky-200' },
            { dur: '3 Months', label: 'Hardware & Diagnostics', color: 'bg-amber-50 text-amber-700 border-amber-200' },
            { dur: '6 Months', label: 'Chip-Level Expert', color: 'bg-sky-900 text-white border-sky-900' },
          ].map(c => (
            <div key={c.dur} className={`border rounded-xl px-5 py-3 flex flex-col ${c.color}`}>
              <span className="font-display font-700 text-lg leading-tight">{c.dur}</span>
              <span className="text-sm opacity-80 font-mono mt-0.5">{c.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div ref={el => refs.current[4] = el} className="flex flex-wrap justify-center gap-4 mb-14">
          <a href="#contact"
             onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
             className="inline-flex items-center gap-2 bg-sky-700 hover:bg-sky-600 text-white
                        font-display font-700 text-base px-8 py-4 rounded-xl
                        shadow-[0_6px_24px_rgba(3,105,161,0.30)]
                        hover:shadow-[0_8px_32px_rgba(3,105,161,0.40)]
                        transition-all duration-200 hover:-translate-y-0.5">
            Enroll in New Batch
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#syllabus"
             onClick={e => { e.preventDefault(); document.querySelector('#syllabus')?.scrollIntoView({ behavior: 'smooth' }) }}
             className="inline-flex items-center gap-2 border-2 border-sky-700/25
                        hover:border-sky-700 text-sky-900 font-display font-700 text-base
                        px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
            View Full Syllabus
          </a>
        </div>

        
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Stats bar */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} ref={el => refs.current[7 + i] = el}
                 className="pl-5 border-l-2 border-amber-400/50">
              <p className="font-display font-800 text-sky-900 text-3xl lg:text-4xl">{s.value}</p>
              <p className="text-sky-900/50 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sky-900/30">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-sky-900/30 to-transparent animate-pulse"/>
      </div> */}
    </section>
  )
}
