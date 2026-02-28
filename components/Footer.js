const courses = [
  '1-Month Foundation Course',
  '3-Month Professional Course',
  '6-Month Expert Course',
]

const links = [
  { label: 'Courses',    href: '#courses'    },
  { label: 'Syllabus',   href: '#syllabus'   },
  { label: 'Instructor', href: '#instructor' },
  { label: 'Why Us',     href: '#why-us'     },
  { label: 'Gallery',    href: '#gallery'    },
  { label: 'Enroll',     href: '#contact'    },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-sky-950 text-white">
      {/* Gold top strip */}
      <div className="bg-amber-500 py-3 px-6">
        <p className="text-center text-sky-950 font-display font-700 text-sm">
          🎓 Batch 1 Admissions Open · LM Infotech Institute · Enroll Now
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 4h6v6H4zM12 4h6v6h-6zM4 12h6v6H4z" fill="#0c4a6e" opacity="0.9"/>
                <rect x="14" y="14" width="4" height="4" rx="1" fill="#0c4a6e"/>
              </svg>
            </div>
            <div>
              <span className="block font-display font-800 text-white text-lg leading-none">
                LM<span className="text-amber-400">.</span>Infotech
              </span>
              <span className="block text-[10px] text-white/40 font-mono tracking-widest uppercase">
                Institute
              </span>
            </div>
          </div>
          <p className="text-white/55 text-sm leading-relaxed mb-6">
            A professional mobile repairing institute backed by a real working service center.
            Learn from a master technician with 20+ years of experience.
          </p>
          <div className="flex gap-3">
            {['youtube', 'instagram', 'facebook', 'whatsapp'].map(s => (
              <a key={s} href="#" aria-label={s}
                 className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center
                            text-white/45 hover:text-white hover:border-amber-400 hover:bg-amber-400/10
                            transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  {s === 'youtube'   && <path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>}
                  {s === 'instagram' && <path d="M16 2H8a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6zM12 17a5 5 0 110-10 5 5 0 010 10zm5.5-11a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>}
                  {s === 'facebook'  && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>}
                  {s === 'whatsapp'  && <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-display font-700 text-white text-base mb-5 after:content-[''] after:block after:w-7 after:h-0.5 after:bg-amber-500 after:mt-2">
            Our Courses
          </h4>
          <ul className="space-y-3">
            {courses.map(c => (
              <li key={c}>
                <a href="#courses" className="text-white/55 text-sm hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400/60 flex-shrink-0"/>
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-700 text-white text-base mb-5 after:content-[''] after:block after:w-7 after:h-0.5 after:bg-amber-500 after:mt-2">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-white/55 text-sm hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400/60 flex-shrink-0"/>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-700 text-white text-base mb-5 after:content-[''] after:block after:w-7 after:h-0.5 after:bg-amber-500 after:mt-2">
            Contact
          </h4>
          <ul className="space-y-4">
            {[
              { label: 'Phone', value: '+91 7073074445', href: 'tel:+917073074445' },
              { label: 'Email', value: 'kumar.karthik03@gmail.com', href: 'mailto:kumar.karthik03@gmail.com' },
              { label: 'Address', value: 'Crown Plaza, Vaishali Nagar, Jaipur' },
              { label: 'Hours', value: 'Mon–Sat: 10 AM – 7 PM' },
            ].map(({ label, value, href }) => (
              <li key={label}>
                <p className="text-white/30 text-[10px] font-mono uppercase tracking-wider mb-0.5">{label}</p>
                {href ? (
                  <a href={href} className="text-white/60 text-sm hover:text-amber-300 transition-colors">{value}</a>
                ) : (
                  <p className="text-white/60 text-sm">{value}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© {year} LM Infotech Institute. All rights reserved.</p>
          <p className="text-white/25 text-xs font-mono">Powered by LM Infotech Service Center</p>
        </div>
      </div>
    </footer>
  )
}
