'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const stats = [
  { value: '20+', label: 'Years Instructor Experience' },
  { value: '3',   label: 'Course Tiers Available' },
  { value: '6mo', label: 'Advanced Track Duration' },
  { value: 'B1',  label: 'First Batch — Enroll Now' },
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
    <section className="relative min-h-screen flex flex-col justify-center circuit-bg overflow-hidden pt-20">
      {/* decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full
                        bg-sky-500/8 blur-[80px]"/>
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full
                        bg-amber-500/6 blur-[80px]"/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[700px] h-[700px] rounded-full bg-sky-100/40 blur-[100px] -z-10"/>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-36 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            {/* Batch badge */}
            <div ref={el => refs.current[0] = el} className="badge mb-8 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
              Admissions Open · Batch 1 — 2025
            </div>

            <h1 ref={el => refs.current[1] = el}
                className="font-display text-sky-950 text-5xl lg:text-6xl xl:text-[70px]
                           font-800 leading-[1.0] mb-6">
              Master<br/>
              Mobile<br/>
              <span className="text-sky-gradient">Repairing.</span>
            </h1>

            <p ref={el => refs.current[2] = el}
               className="text-sky-900/60 text-lg leading-relaxed mb-8 max-w-lg">
              From screen replacements to chip-level motherboard surgery — learn everything with
              <strong className="text-sky-800 font-600"> H Kumar</strong>, a master technician
              with <strong className="text-sky-800 font-600">20+ years</strong> of hands-on experience.
            </p>

            {/* Course pills */}
            <div ref={el => refs.current[3] = el} className="flex flex-wrap gap-3 mb-8">
              {[
                { dur: '1 Month', label: 'Basics & Assembly', color: 'bg-sky-100 text-sky-700 border-sky-200' },
                { dur: '3 Months', label: 'Hardware & Diagnostics', color: 'bg-amber-50 text-amber-700 border-amber-200' },
                { dur: '6 Months', label: 'Chip-Level Expert', color: 'bg-sky-900 text-white border-sky-900' },
              ].map(c => (
                <div key={c.dur} className={`border rounded-xl px-4 py-2.5 flex flex-col ${c.color}`}>
                  <span className="font-display font-700 text-base leading-tight">{c.dur}</span>
                  <span className="text-xs opacity-70 font-mono mt-0.5">{c.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div ref={el => refs.current[4] = el} className="flex flex-wrap gap-4 mb-12">
              <a href="#contact"
                 onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                 className="inline-flex items-center gap-2 bg-sky-700 hover:bg-sky-600 text-white
                            font-display font-700 text-sm px-8 py-4 rounded-xl
                            shadow-[0_6px_24px_rgba(3,105,161,0.30)]
                            hover:shadow-[0_8px_32px_rgba(3,105,161,0.40)]
                            transition-all duration-200 hover:-translate-y-0.5">
                Enroll in Batch 1
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#syllabus"
                 onClick={e => { e.preventDefault(); document.querySelector('#syllabus')?.scrollIntoView({ behavior: 'smooth' }) }}
                 className="inline-flex items-center gap-2 border-2 border-sky-700/25
                            hover:border-sky-700 text-sky-900 font-display font-700 text-sm
                            px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
                View Full Syllabus
              </a>
            </div>

            {/* Trust row */}
            <div ref={el => refs.current[5] = el} className="flex flex-wrap gap-5">
              {['Hands-on Practical', 'Certificate on Completion', 'Job Assistance'].map(t => (
                <div key={t} className="flex items-center gap-2 text-sky-900/55">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="text-xs font-mono tracking-wide">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Instructor card */}
          <div ref={el => refs.current[6] = el} className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-sm">

              {/* Main card */}
              <div className="bg-sky-900 rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(3,105,161,0.30)]">
                {/* Photo area */}
                <div className="relative bg-sky-800 h-64 flex items-end justify-center overflow-hidden">
                  {/* --- PHOTO SLOT ---
                      Replace the placeholder below with:
                      import Image from 'next/image'
                      <Image src="/images/instructor.jpg" alt="H Kumar" fill className="object-cover object-top" />
                  */}
                  
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-700 to-sky-950">
                    <div className="text-center">
                      <div className="w-28 h-28 rounded-full bg-sky-600/50 border-4 border-sky-500/30
                                      flex items-center justify-center mx-auto mb-3">
                        <Image src="/images/instructor.jpg" alt="H Kumar" fill className="object-cover object-top" />
                      </div>
                      <p className="text-white/40 text-xs font-mono">Add instructor photo</p>
                      <p className="text-white/25 text-[10px] font-mono">/public/images/instructor.jpg</p>
                    </div>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900 via-transparent to-transparent"/>
                  {/* Name overlay */}
                  <div className="relative z-10 px-6 pb-5 text-center w-full">
                    <h3 className="font-display font-800 text-white text-2xl">H Kumar</h3>
                    <p className="text-sky-300 text-sm font-mono">Lead Instructor & Founder</p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { val: '20+', lbl: 'Years Experience' },
                      { val: '50K+', lbl: 'Devices Repaired' },
                      { val: 'Chip', lbl: 'Level Expert' },
                      { val: 'B1', lbl: 'First Batch' },
                    ].map(s => (
                      <div key={s.lbl} className="bg-sky-800/60 rounded-xl p-3 text-center">
                        <p className="font-display font-800 text-white text-xl">{s.val}</p>
                        <p className="text-sky-300/70 text-[11px] font-mono mt-0.5">{s.lbl}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-amber-500/15 border border-amber-500/30 rounded-xl px-4 py-3 text-center">
                    <p className="text-amber-300 text-xs font-mono uppercase tracking-wider">
                      🎓 Batch 1 seats are limited — enroll early
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl px-5 py-4
                              shadow-[0_12px_40px_rgba(3,105,161,0.15)] border border-sky-100">
                <p className="text-sky-900/45 text-[10px] font-mono uppercase tracking-wider mb-1">Course Tracks</p>
                <p className="text-sky-900 font-display font-800 text-2xl">3 Levels</p>
                <p className="text-sky-600 text-xs font-500 mt-1">1mo · 3mo · 6mo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sky-900/30">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-sky-900/30 to-transparent animate-pulse"/>
      </div>
    </section>
  )
}
