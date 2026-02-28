'use client'

import { useEffect, useRef, useState } from 'react'

const reasons = [
  { num: '01', title: 'Real Workshop Practicals', desc: 'Every theory session is paired with hands-on practice on actual devices, not dummy models.' },
  { num: '02', title: 'Industry-Grade Equipment', desc: 'Learn on the same microscopes, power supplies and soldering stations used in professional repair labs.' },
  { num: '03', title: 'Small Batch Size', desc: 'This is our first batch — small by design. Every student gets personal attention from H Kumar himself.' },
  { num: '04', title: 'Job-Ready Skills', desc: 'The curriculum is built around what actual service centers need. You\'ll be employable from day one.' },
  { num: '05', title: 'Certificate on Completion', desc: 'Receive a recognized course completion certificate to validate your skills to employers.' },
  { num: '06', title: 'Backed by a Working Lab', desc: 'We\'re not just a classroom — LM Infotech is a fully active repair center. Real cases, real learning.' },
]

const faqs = [
  {
    q: 'Do I need any prior electronics knowledge?',
    a: 'No. The 1-Month and 3-Month courses start from the very basics. The 6-Month course includes all foundation modules.',
  },
  {
    q: 'What tools and equipment are provided?',
    a: 'Lab equipment is provided during practicals. You\'ll also learn which tools to buy if you plan to start your own setup.',
  },
  {
    q: 'Will I get hands-on practice with real phones?',
    a: 'Yes. Every module includes practical sessions on real devices — different brands, different models.',
  },
  {
    q: 'Is there placement assistance after the course?',
    a: 'We provide job assistance and can connect you with service centers in the network. Placement support is included.',
  },
  {
    q: 'When does Batch 1 start?',
    a: 'Batch 1 dates will be confirmed soon. Contact us to register your interest and be notified first.',
  },
]

function FAQ({ q, a }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-sky-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-sky-50/50 transition-colors"
      >
        <span className="font-600 text-sky-900 text-sm pr-4">{q}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2.5"
             className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <div className={`accordion-body ${isOpen ? 'open' : ''}`}>
        <div className="px-6 pb-5 pt-1">
          <p className="text-sky-900/60 text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function WhyUs() {
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
    <section id="why-us" className="py-24 lg:py-32 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={el => refs.current[0] = el} className="reveal mb-16 max-w-2xl">
          <div className="section-label">
            <span className="text-amber-600 text-xs font-mono uppercase tracking-widest font-600">Why LM Infotech</span>
          </div>
          <h2 className="font-display text-sky-950 text-4xl lg:text-5xl font-800 leading-tight mb-4">
            Not Just a Course —<br/>
            <span className="text-sky-gradient">A Career Foundation</span>
          </h2>
          <p className="text-sky-900/55 text-base leading-relaxed">
            Most mobile repair courses teach theory. We teach what actually happens in a real workshop.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Reasons */}
          <div>
            <div className="grid grid-cols-1 gap-px bg-sky-100 rounded-2xl overflow-hidden">
              {reasons.map((r, i) => (
                <div
                  key={r.num}
                  ref={el => refs.current[i + 1] = el}
                  className="reveal bg-white p-6 hover:bg-sky-50/80 transition-colors duration-200 group"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-sky-200 text-3xl font-800 leading-none mt-1
                                     group-hover:text-sky-300 transition-colors duration-300">
                      {r.num}
                    </span>
                    <div>
                      <h4 className="font-display font-700 text-sky-900 text-base mb-1">{r.title}</h4>
                      <p className="text-sky-900/55 text-sm leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div ref={el => refs.current[7] = el} className="reveal delay-200">
            <p className="text-sky-900/40 text-xs font-mono uppercase tracking-widest mb-6">
              Frequently Asked Questions
            </p>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <FAQ key={i} q={f.q} a={f.a} />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 bg-sky-900 rounded-2xl p-6 text-white">
              <p className="font-display font-700 text-xl mb-2">Still have questions?</p>
              <p className="text-white/60 text-sm mb-5">Talk to us directly. We'll help you choose the right course.</p>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400
                           text-sky-950 text-sm font-700 px-6 py-3 rounded-xl
                           transition-all duration-200 hover:-translate-y-0.5"
              >
                Talk to Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
