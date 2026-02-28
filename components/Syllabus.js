'use client'

import { useEffect, useRef, useState } from 'react'

const syllabusData = [
  {
    level: '1-Month Course',
    color: 'sky',
    modules: [
      {
        title: 'Complete Mobile Disassembly & Assembly',
        topics: [
          'Safe phone opening techniques',
          'Use of tools: screwdrivers, pry tools, heat gun',
          'Removing and replacing: Display, Battery, Charging port, Camera',
          'Speaker, mic & vibrator issues',
          'SIM network contact cleaning',
          'Handling flex cables & connectors',
          'Factory reset & safe data backup',
          'Identifying hardware vs software problems',
          'Practical: Disassembly of Samsung, Xiaomi, Vivo, Oppo, iPhone',
        ],
      },
    ],
  },
  {
    level: '3-Month Course',
    color: 'sky',
    modules: [
      {
        title: 'Module 1: Basic Electronics — Foundation',
        topics: [
          'Resistors, Capacitors, Diodes, Transistors',
          'Coils, Fuses, Connectors',
          'Reading component values',
          'Common electronic failures in mobiles',
          'Practical: Identify components on real mobile boards',
          'Short circuit theory',
          'PCB continuity testing',
        ],
      },
      {
        title: 'Module 2: Hardware & Software Diagnostics',
        topics: [
          'Using multimeter for diagnostics',
          'Using DC power supply',
          'Voltage drop analysis',
          'Understanding schematics (basic level)',
          'Finding all motherboard issues',
          'Dead phone & no power problems',
          'Overcurrent & network issues',
          'Identifying boot loop & hanging issues',
          'Log analysis basics',
        ],
      },
      {
        title: 'Module 3: Charging & Power Section Repairs',
        topics: [
          'Charging IC issues & replacement',
          'Battery connector problems',
          'PMIC basics',
        ],
      },
      {
        title: 'Module 4: Android Flashing & OS Installation',
        topics: [
          'Flashing theory & firmware selection',
          'Tools: SP Flash Tool, Miracle Box, UFI (overview)',
          'Unbricking dead phones',
          'Boot loop fixing',
          'IMEI basics & backup',
        ],
      },
    ],
  },
  {
    level: '6-Month Course (Advanced)',
    color: 'sky',
    modules: [
      {
        title: 'Module 1: Advanced Chip-Level Repair',
        topics: [
          'PCB layers understanding',
          'Signal tracing techniques',
          'Short killing techniques',
          'Board view & schematics usage',
          'Common chipset failures',
        ],
      },
      {
        title: 'Module 2: Micro-Soldering & IC Replacement',
        topics: [
          'Soldering station mastery',
          'Hot air gun control & technique',
          'IC removal & reballing',
          'Charging IC replacement',
          'Audio IC & backlight IC repair',
          'CPU heating & reflow theory',
        ],
      },
      {
        title: 'Module 4: Advanced Software & Unlocking',
        topics: [
          'Advanced flashing techniques',
          'Baseband & modem issues',
          'EFS backup & restore',
          'Bootloader unlocking basics',
          'Legal considerations',
        ],
      },
      {
        title: 'Module 5: FRP Lock & Pattern Lock Removal',
        topics: [
          'FRP concepts & Android security basics',
          'Safe and legal unlocking methods',
          'Tools used in professional service centers',
          'Data safety practices',
        ],
      },
      {
        title: 'Module 6: Camera, Network & Sensor Issues',
        topics: [
          'Camera troubleshooting',
          'Network searching / no service issues',
          'SIM detection problems',
          'Proximity, gyro & fingerprint sensor issues',
        ],
      },
      {
        title: 'Module 5 (Optional): iPhone Introduction',
        topics: [
          'iPhone architecture basics',
          'Battery & display replacement',
          'Charging & audio issues',
          'iOS flashing basics',
        ],
        optional: true,
      },
    ],
  },
]

function AccordionModule({ module, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false)

  return (
    <div className="border border-sky-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left
                   hover:bg-sky-50 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {module.optional && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-700 border border-amber-200">
              Optional
            </span>
          )}
          <span className="font-display font-700 text-sky-900 text-base">{module.title}</span>
        </div>
        <svg
          width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="#0369a1" strokeWidth="2.5"
          className={`flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>

      <div className={`accordion-body ${open ? 'open' : ''}`}>
        <div className="px-6 pb-5 pt-1">
          <ul className="space-y-2">
            {module.topics.map((t, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sky-900/65 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0"/>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Syllabus() {
  const [activeLevel, setActiveLevel] = useState(0)
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
    <section id="syllabus" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={el => refs.current[0] = el} className="reveal mb-14 max-w-2xl">
          <div className="section-label">
            <span className="text-amber-600 text-xs font-mono uppercase tracking-widest font-600">
              Full Syllabus
            </span>
          </div>
          <h2 className="font-display text-sky-950 text-4xl lg:text-5xl font-800 mb-4 leading-tight">
            What You'll<br/>
            <span className="text-sky-gradient">Actually Learn</span>
          </h2>
          <p className="text-sky-900/55 text-base leading-relaxed">
            A structured curriculum built from 20+ years of real service center experience.
            Every topic is practical and industry-relevant.
          </p>
        </div>

        <div ref={el => refs.current[1] = el} className="reveal">
          {/* Level tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {syllabusData.map((s, i) => (
              <button
                key={s.level}
                onClick={() => setActiveLevel(i)}
                className={`px-5 py-2.5 rounded-xl text-sm font-700 font-display transition-all duration-200 ${
                  activeLevel === i
                    ? 'bg-sky-700 text-white shadow-[0_4px_14px_rgba(3,105,161,0.25)]'
                    : 'bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200'
                }`}
              >
                {s.level}
              </button>
            ))}
          </div>

          {/* Modules */}
          <div className="space-y-3">
            {syllabusData[activeLevel].modules.map((mod, i) => (
              <AccordionModule key={mod.title} module={mod} defaultOpen={i === 0} />
            ))}
          </div>
        </div>

        {/* Download note */}
        <div ref={el => refs.current[2] = el}
             className="reveal delay-200 mt-10 bg-sky-50 border border-sky-200 rounded-2xl p-6
                        flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-display font-700 text-sky-900 text-base">Want the complete syllabus PDF?</p>
            <p className="text-sky-900/55 text-sm mt-1">
              Contact us and we'll send you the full course brochure with fee structure.
            </p>
          </div>
          <a href="#contact"
             onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
             className="flex-shrink-0 inline-flex items-center gap-2 bg-sky-700 hover:bg-sky-600
                        text-white text-sm font-700 px-6 py-3 rounded-xl
                        transition-all duration-200 hover:-translate-y-0.5
                        shadow-[0_4px_14px_rgba(3,105,161,0.25)]">
            Get Brochure
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
