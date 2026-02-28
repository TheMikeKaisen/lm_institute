import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: {
    default: 'LM Infotech Institute | Mobile Repairing Course — Batch 1',
    template: '%s | LM Infotech Institute',
  },
  description:
    'Learn mobile repairing from H Kumar — 20+ years of experience. 1-Month, 3-Month and 6-Month courses covering chip-level repair, soldering, diagnostics and more. Enroll now for Batch 1.',
  keywords: [
    'mobile repairing course', 'chip level repair training', 'phone repair institute',
    'H Kumar mobile course', 'LM Infotech institute', '6 month mobile course',
    'mobile technician course', 'soldering training',
  ],
  authors:     [{ name: 'LM Infotech Institute' }],
  creator:     'LM Infotech Institute',
  metadataBase: new URL('https://institute.lminfotech.in'),
  openGraph: {
    type:     'website',
    locale:   'en_IN',
    url:      'https://institute.lminfotech.in',
    siteName: 'LM Infotech Institute',
    title:    'LM Infotech Institute | Mobile Repairing Courses',
    description: 'Professional mobile repairing courses by H Kumar with 20+ years experience.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'LM Infotech Institute' }],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
