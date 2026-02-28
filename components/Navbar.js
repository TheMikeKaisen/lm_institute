'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Courses',    href: '#courses'    },
  { label: 'Syllabus',   href: '#syllabus'   },
  { label: 'Instructor', href: '#instructor' },
  { label: 'Why Us',     href: '#why-us'     },
  { label: 'Gallery',    href: '#gallery'    },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32)
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const id = navLinks[i].href.replace('#', '')
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink(navLinks[i].href); break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/96 backdrop-blur-md shadow-[0_2px_20px_rgba(3,105,161,0.10)] py-3'
               : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="LM Infotech Institute">
          <div className="w-10 h-10 bg-sky-700 rounded-xl flex items-center justify-center
                          group-hover:bg-sky-600 transition-colors duration-200 shadow-[0_4px_14px_rgba(3,105,161,0.30)]">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 4h6v6H4zM12 4h6v6h-6zM4 12h6v6H4z" fill="white" opacity="0.9"/>
              <rect x="14" y="14" width="4" height="4" rx="1" fill="#fbbf24"/>
            </svg>
          </div>
          <div className="leading-tight">
            <span className="block font-display font-800 text-sky-900 text-[17px] tracking-tight leading-none">
              LM<span className="text-amber-500">.</span>Infotech
            </span>
            <span className="block text-[10px] text-sky-700/60 font-mono tracking-widest uppercase">
              Institute
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map(l => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                activeLink === l.href
                  ? 'text-sky-700 bg-sky-50'
                  : 'text-sky-900/65 hover:text-sky-900 hover:bg-sky-50'
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); go('#contact') }}
            className="hidden md:flex items-center gap-2 bg-sky-700 hover:bg-sky-600
                       text-white text-sm font-600 px-5 py-2.5 rounded-xl
                       transition-all duration-200 shadow-[0_4px_14px_rgba(3,105,161,0.30)]
                       hover:shadow-[0_6px_20px_rgba(3,105,161,0.40)] hover:-translate-y-0.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
            </svg>
            Enroll Now
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-sky-900 hover:bg-sky-50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="bg-white border-t border-sky-100 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(l => (
            <button key={l.href} onClick={() => go(l.href)}
              className="text-left px-4 py-3 text-sky-900 font-medium text-sm rounded-xl hover:bg-sky-50 transition-colors">
              {l.label}
            </button>
          ))}
          <a href="#contact" onClick={e => { e.preventDefault(); go('#contact'); setMenuOpen(false) }}
             className="mt-2 flex items-center justify-center gap-2 bg-sky-700 text-white text-sm font-600 px-5 py-3 rounded-xl">
            Enroll Now
          </a>
        </nav>
      </div>
    </header>
  )
}
