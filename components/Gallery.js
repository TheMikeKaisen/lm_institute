'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

/*
  ============================================================
  HOW TO ADD REAL PHOTOS TO THIS GALLERY
  ============================================================
  1. Place your images inside /public/images/gallery/
     Example: /public/images/gallery/lab-overview.jpg

  2. In each galleryItems entry below, add a `src` property:
     { id: 1, title: '...', src: '/images/gallery/lab-overview.jpg', ... }

  3. Replace the placeholder div in the render section with:

     import Image from 'next/image'
     <Image
       src={item.src}
       alt={item.title}
       fill
       className="object-cover group-hover:scale-105 transition-transform duration-500"
     />

  4. Recommended image sizes:
     - Regular cards: 600×400px (landscape)
     - Tall cards: 600×800px (portrait)
     - All should be JPG or WebP for best performance
  ============================================================
*/
const galleryItems = [
  { id: 1, category: 'Lab', title: 'Lab Overview', desc: 'Full view...', tall: true, src: '/images/gallery/lab-overview.jpeg' },
  { id: 2, category: 'Equipment', title: 'Microscope Station', desc: 'Stereo...', tall: false, src: '/images/gallery/microscope-station.jpeg' },
  { id: 3, category: 'Teaching', title: 'Practical Session', desc: 'Students...', tall: false, src: '/images/gallery/practical-session.jpeg' },
  { id: 4, category: 'Equipment', title: 'Soldering Setup', desc: 'Hot air...', tall: false, src: '/images/gallery/soldering-setup.jpeg' },
  { id: 5, category: 'Lab', title: 'Component Workbench', desc: 'Organized...', tall: false, src: '/images/gallery/workbench.jpeg' },

]

const gradients = [
  ['from-sky-800', 'to-sky-950'],
  ['from-sky-700', 'to-sky-900'],
  ['from-sky-900', 'to-sky-800'],
  ['from-sky-600', 'to-sky-900'],
  ['from-sky-800', 'to-sky-700'],
  ['from-sky-900', 'to-sky-950'],
  ['from-sky-700', 'to-sky-800'],
  ['from-sky-950', 'to-sky-800'],
]

const categories = ['All', 'Lab', 'Equipment', 'Teaching']

export default function Gallery() {
  const [active, setActive] = useState('All')
  const refs = useRef([])

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.category === active)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [active])

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={el => refs.current[0] = el}
          className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-label">
              <span className="text-amber-600 text-xs font-mono uppercase tracking-widest font-600">Gallery</span>
            </div>
            <h2 className="font-display text-sky-950 text-4xl lg:text-5xl font-800 leading-tight">
              The Lab & Classroom
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-600 transition-all duration-200 ${active === cat
                    ? 'bg-sky-700 text-white shadow-[0_4px_14px_rgba(3,105,161,0.25)]'
                    : 'bg-sky-50 border border-sky-200 text-sky-700 hover:bg-sky-100'
                  }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (

            <div
              key={item.id}
              ref={el => refs.current[i + 1] = el}
              className={`reveal card-lift group relative rounded-2xl overflow-hidden cursor-pointer
    ${item.tall ? 'row-span-2' : ''}`}
              style={{ minHeight: item.tall ? '440px' : '200px', transitionDelay: `${i * 60}ms` }}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Category tag */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest bg-black/30 backdrop-blur-sm text-white/80 px-2.5 py-1 rounded-lg">
                  {item.category}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/90 via-sky-950/10 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"/>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20
                  translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100
                  transition-all duration-300">
                <p className="text-white font-display font-700 text-sm">{item.title}</p>
                <p className="text-white/55 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
