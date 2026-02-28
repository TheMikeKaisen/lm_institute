'use client'

import { useEffect, useRef } from 'react'

const courses = [
  {
    duration: '1 Month',
    title: 'Foundation Course',
    subtitle: 'Complete Mobile Disassembly & Assembly',
    price: 'Contact for Fee',
    color: 'border-sky-200',
    headerBg: 'bg-sky-50',
    badge: 'Beginner',
    badgeColor: 'bg-sky-100 text-sky-700',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2"/>
      </svg>
    ),
    highlights: [
      'Safe phone opening techniques',
      'Tools: screwdrivers, pry tools, heat gun',
      'Display, battery & port replacement',
      'Camera, speaker, mic & vibrator repair',
      'SIM network contact cleaning',
      'Hardware vs software identification',
      'Practical: Samsung, Xiaomi, Vivo, Oppo, iPhone',
    ],
  },
  {
    duration: '3 Months',
    title: 'Professional Course',
    subtitle: 'Electronics Foundation + Hardware Diagnostics',
    price: 'Contact for Fee',
    color: 'border-sky-700',
    headerBg: 'bg-sky-700',
    badge: 'Most Popular',
    badgeColor: 'bg-amber-400 text-amber-900',
    featured: true,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    highlights: [
      'Resistors, capacitors, diodes & transistors',
      'Reading component values on real boards',
      'Short circuit theory & PCB continuity',
      'Using multimeter & DC power supply',
      'Voltage drop analysis',
      'Basic schematic understanding',
      'Dead phone & no-power diagnostics',
      'Charging IC & battery connector repair',
      'Android flashing with SP Flash Tool',
    ],
  },
  {
    duration: '6 Months',
    title: 'Advanced Expert Course',
    subtitle: 'Chip-Level Repair + Micro-Soldering',
    price: 'Contact for Fee',
    color: 'border-sky-200',
    headerBg: 'bg-sky-950',
    badge: 'Expert',
    badgeColor: 'bg-sky-900 text-sky-200',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
    highlights: [
      'PCB layer signal tracing & short killing',
      'Hot air & soldering station mastery',
      'IC removal, reballing & replacement',
      'Charging IC, audio IC & backlight IC',
      'Advanced flashing & baseband repair',
      'EFS backup, restore & bootloader basics',
      'FRP & pattern lock removal (legal methods)',
      'Camera, network & sensor diagnostics',
      'iPhone basics: battery, display, audio',
    ],
  },
]

export default function Courses() {
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
    <section id="courses" className="py-24 lg:py-32 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={el => refs.current[0] = el} className="reveal mb-16 max-w-2xl">
          <div className="section-label">
            <span className="text-amber-600 text-xs font-mono uppercase tracking-widest font-600">
              Course Tracks
            </span>
          </div>
          <h2 className="font-display text-sky-950 text-4xl lg:text-5xl font-800 mb-4 leading-tight">
            Three Levels of<br/>
            <span className="text-sky-gradient">Mastery</span>
          </h2>
          <p className="text-sky-900/55 text-lg leading-relaxed">
            Start from basics and progress to advanced chip-level repair.
            Each course builds on the previous, giving you real, job-ready skills.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {courses.map((c, i) => (
            <div
              key={c.duration}
              ref={el => refs.current[i + 1] = el}
              className={`reveal card-lift rounded-3xl border-2 overflow-hidden bg-white ${c.color}
                ${c.featured ? 'shadow-[0_16px_60px_rgba(3,105,161,0.18)] scale-[1.02]' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Header */}
              <div className={`${c.headerBg} p-7 ${c.featured ? 'text-white' : 'text-sky-900'}`}>
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center
                    ${c.featured ? 'bg-white/15' : 'bg-sky-100'}`}>
                    <div className={c.featured ? 'text-white' : 'text-sky-700'}>
                      {c.icon}
                    </div>
                  </div>
                  <span className={`text-xs font-mono font-600 px-3 py-1.5 rounded-lg ${c.badgeColor}`}>
                    {c.badge}
                  </span>
                </div>

                <div className={`font-mono text-xs uppercase tracking-widest mb-2 ${c.featured ? 'text-sky-200/70' : 'text-sky-500'}`}>
                  Duration
                </div>
                <h3 className="font-display font-800 text-4xl mb-1">{c.duration}</h3>
                <p className={`font-600 text-base mt-1 ${c.featured ? 'text-sky-100' : 'text-sky-700'}`}>
                  {c.title}
                </p>
                <p className={`text-sm mt-1 ${c.featured ? 'text-sky-200/60' : 'text-sky-900/50'}`}>
                  {c.subtitle}
                </p>
              </div>

              {/* Highlights */}
              <div className="p-7">
                <p className="text-sky-900/40 text-[10px] font-mono uppercase tracking-widest mb-4">
                  What You'll Learn
                </p>
                <ul className="space-y-2.5 mb-7">
                  {c.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2.5 text-sky-900/70 text-sm">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2.5"
                           className="mt-0.5 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                <a href="#contact"
                   onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                   className={`block w-full text-center py-3.5 rounded-xl font-display font-700 text-sm
                     transition-all duration-200 hover:-translate-y-0.5
                     ${c.featured
                       ? 'bg-sky-700 text-white hover:bg-sky-600 shadow-[0_4px_16px_rgba(3,105,161,0.25)]'
                       : 'bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-100'
                     }`}>
                  Enquire &amp; Enroll →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p ref={el => refs.current[4] = el}
           className="reveal delay-300 text-center text-sky-900/40 text-sm mt-10 font-mono">
          All courses include hands-on practicals · Certificate awarded on completion
        </p>
      </div>
    </section>
  )
}
