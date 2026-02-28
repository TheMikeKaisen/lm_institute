'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const credentials = [
  { icon: '🏆', title: '20+ Years Experience', desc: 'Two decades of hands-on mobile repair across thousands of devices' },
  { icon: '🔬', title: 'Chip-Level Expert', desc: 'Specializes in motherboard-level diagnosis and micro-soldering' },
  { icon: '📱', title: 'Multi-Brand Expertise', desc: 'iPhone, Samsung, OnePlus, Xiaomi, Oppo, Vivo and more' },
  { icon: '🎓', title: 'Certified Trainer', desc: 'Structured teaching methodology developed from real service center experience' },
  { icon: '🛠️', title: 'Service Center Founder', desc: 'Runs LM Infotech Service Center — a professional repair lab' },
  { icon: '💡', title: 'Industry Connected', desc: 'Up-to-date with the latest tools, techniques and repair practices' },
]

export default function Instructor() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="instructor" className="py-24 lg:py-32 bg-sky-950 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sky-500/8 blur-[80px]"/>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-500/6 blur-[80px]"/>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — photo + quote */}
          <div ref={el => refs.current[0] = el} className="reveal">

            {/* Photo card */}
            <div className="relative">
              <div className="bg-sky-800/50 border border-sky-700/50 rounded-3xl overflow-hidden">

                {/* ============================================================
                    PHOTO SLOT — H Kumar
                    To add the real photo:
                    1. Place instructor.jpg in /public/images/instructor.jpg
                    2. Replace the placeholder div below with:

                    import Image from 'next/image'
                    
                    </div>

                    ============================================================ */}
                    
                <div className="h-80 flex items-center justify-center bg-gradient-to-br from-sky-800 to-sky-950 relative">
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 to-transparent"/>
                  {/* Name on photo */}
                  <div className="relative h-80 w-full">
                      <Image
                        src="/images/instructor.jpg"
                        alt="H Kumar — Lead Instructor"
                        fill
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-display font-800 text-white text-3xl">H Kumar</h3>
                    <p className="text-sky-300 text-sm font-mono mt-1">
                      Lead Instructor & Founder, LM Infotech
                    </p>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 divide-x divide-sky-700/50">
                  {[
                    { val: '20+', lbl: 'Years' },
                    { val: '50K+', lbl: 'Repaired' },
                    { val: '3', lbl: 'Courses' },
                  ].map(s => (
                    <div key={s.lbl} className="py-5 text-center">
                      <p className="font-display font-800 text-white text-2xl">{s.val}</p>
                      <p className="text-sky-400/60 text-[11px] font-mono mt-0.5">{s.lbl}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote card */}
              <div className="mt-5 bg-amber-500/15 border border-amber-500/25 rounded-2xl p-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#f59e0b" className="mb-3 opacity-60">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-white/75 text-base leading-relaxed italic">
                  "My goal is simple — to give students the same skills it took me 20 years to build,
                  in just 6 months of focused learning."
                </p>
                <p className="text-amber-400 font-display font-700 text-sm mt-3">— H Kumar</p>
              </div>
            </div>
          </div>

          {/* Right — credentials */}
          <div ref={el => refs.current[1] = el} className="reveal delay-200">
            <div className="section-label">
              <span className="text-amber-400 text-xs font-mono uppercase tracking-widest font-600">
                Your Instructor
              </span>
            </div>
            <h2 className="font-display text-white text-4xl lg:text-5xl font-800 mb-6 leading-tight">
              Learn From a<br/>
              <span className="text-sky-400">True Expert</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              H Kumar has spent over two decades in mobile repair — from basic screen swaps
              to complex chip-level motherboard surgery. He doesn't just teach theory;
              everything you learn comes from <span className="text-white/90 font-600">real workshop experience.</span>
            </p>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((c, i) => (
                <div
                  key={c.title}
                  ref={el => refs.current[2 + i] = el}
                  className="reveal bg-white/5 border border-white/10 rounded-2xl p-5
                             hover:bg-white/8 hover:border-sky-500/30 transition-all duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="text-2xl block mb-3">{c.icon}</span>
                  <p className="font-display font-700 text-white text-sm mb-1">{c.title}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
