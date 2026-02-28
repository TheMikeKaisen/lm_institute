'use client'

import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', course: '', qualification: '', message: ''
  })
  const [sent, setSent] = useState(false)
  const refs = useRef([])

  const change = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

 const submit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New Enrollment Request: ${form.name}`,
          from_name: "LM Infotech Enrollment Form",
          ...form
        })
      })

      if (response.ok) {
        setSent(true)
        setTimeout(() => setSent(false), 5000)
        setForm({ name: '', phone: '', email: '', course: '', qualification: '', message: '' })
      }
    } catch (error) {
      console.error("Failed to send", error)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const inp = `w-full bg-white border border-sky-200 rounded-xl px-4 py-3.5 text-sky-900
    text-sm placeholder-sky-900/30 outline-none focus:border-sky-500 focus:ring-2
    focus:ring-sky-100 transition-all duration-200`

  return (
    <section id="contact" className="py-24 lg:py-32 bg-sky-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sky-500/8 blur-[80px]"/>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — info */}
          <div ref={el => refs.current[0] = el} className="reveal">
            <div className="section-label">
              <span className="text-amber-400 text-xs font-mono uppercase tracking-widest font-600">
                Enroll Now
              </span>
            </div>
            <h2 className="font-display text-white text-4xl lg:text-5xl font-800 mb-6 leading-tight">
              Join Batch 1<br/>
              <span className="text-sky-400">Before It Fills Up</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              This is our very first batch — small in size, high in quality. Fill the form
              and we'll get back to you with course fees, schedule, and seat confirmation.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-10">
              {[
                {
                  icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>,
                  label: 'Phone / WhatsApp',
                  value: '7073074445',
                  href: 'tel:+917073074445',
                },
                {
                  icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
                  label: 'Email',
                  value: 'kumar.karthik03@gmail.com',
                  href: 'mailto:kumar.karthik03@gmail.com',
                },
                {
                  icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>,
                  label: 'Location',
                  value: 'Crown Plaza, Vaishali Nagar, Jaipur',
                },
                {
                  icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
                  label: 'Class Timings',
                  value: 'Morning & Evening batches available',
                },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10
                                            hover:bg-white/8 hover:border-sky-500/30 transition-all duration-200 group">
                  <div className="w-11 h-11 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0
                                  group-hover:bg-sky-500/20 transition-colors duration-200">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                         stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/35 text-[10px] font-mono uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a href={href} className="text-white text-sm font-500 hover:text-sky-300 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-500">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Batch info card */}
            <div className="bg-amber-500/15 border border-amber-500/25 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎓</span>
                <p className="font-display font-700 text-white text-lg">Batch 1 — Limited Seats</p>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                We're keeping this batch small intentionally — so every student gets
                direct mentorship from H Kumar. Register your interest early.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div ref={el => refs.current[1] = el} className="reveal delay-200">
            <div className="bg-white rounded-3xl p-8 shadow-[0_32px_80px_rgba(0,0,0,0.25)]">
              <p className="font-display font-800 text-sky-900 text-2xl mb-2">Enrollment Form</p>
              <p className="text-sky-900/50 text-sm mb-7">
                Fill this form and we'll confirm your seat and share fee details.
              </p>

              {sent && (
                <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <p className="text-green-700 text-sm font-600">
                    Thank you! We'll contact you within 24 hours to confirm your enrollment.
                  </p>
                </div>
              )}

              <form onSubmit={submit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sky-900/55 text-[11px] font-mono uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input type="text" name="name" value={form.name} onChange={change}
                           placeholder="Your full name" required className={inp}/>
                  </div>
                  <div>
                    <label className="block text-sky-900/55 text-[11px] font-mono uppercase tracking-wider mb-1.5">
                      Phone *
                    </label>
                    <input type="tel" name="phone" value={form.phone} onChange={change}
                           placeholder="+91 98765 43210" required className={inp}/>
                  </div>
                </div>

                <div>
                  <label className="block text-sky-900/55 text-[11px] font-mono uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input type="email" name="email" value={form.email} onChange={change}
                         placeholder="you@example.com" className={inp}/>
                </div>

                <div>
                  <label className="block text-sky-900/55 text-[11px] font-mono uppercase tracking-wider mb-1.5">
                    Course Interest *
                  </label>
                  <select name="course" value={form.course} onChange={change} required className={inp}>
                    <option value="" disabled>Select a course</option>
                    <option value="1month">1-Month — Foundation Course</option>
                    <option value="3month">3-Month — Professional Course</option>
                    <option value="6month">6-Month — Advanced Expert Course</option>
                    <option value="unsure">Not sure yet — need guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sky-900/55 text-[11px] font-mono uppercase tracking-wider mb-1.5">
                    Educational Qualification
                  </label>
                  <select name="qualification" value={form.qualification} onChange={change} className={inp}>
                    <option value="">Select qualification</option>
                    <option>10th Pass</option>
                    <option>12th Pass</option>
                    <option>Diploma / ITI</option>
                    <option>Graduate</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sky-900/55 text-[11px] font-mono uppercase tracking-wider mb-1.5">
                    Any Prior Experience?
                  </label>
                  <textarea name="message" value={form.message} onChange={change} rows={3}
                             placeholder="Tell us briefly about your background or why you want to learn mobile repairing..."
                             className={`${inp} resize-none`}/>
                </div>

                <button type="submit"
                  className="w-full bg-sky-700 hover:bg-sky-600 text-white font-display font-700
                             py-4 rounded-xl transition-all duration-200 text-sm
                             shadow-[0_6px_24px_rgba(3,105,161,0.30)]
                             hover:shadow-[0_8px_32px_rgba(3,105,161,0.40)]
                             hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Submit Enrollment Request
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 19-7z"/>
                  </svg>
                </button>

                <p className="text-center text-sky-900/35 text-xs">
                  Free to enquire · No commitment until seat is confirmed
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
