import PreLoader from './components/PreLoader/PreLoader'
import { Raleway_Dots, Raleway, Tangerine } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Header from './components/Nav/Header'
import Contact from './components/Contact/Contact'

const maine = localFont({
  display: 'swap',
  src: [{ path: '../public/fonts/maine-light-webfont.woff2', style: 'normal' }],
  variable: '--font-maine',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-raleway',
})
const raleway_dots = Raleway_Dots({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-raleway-dots',
})
const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-tangerine',
})

export const metadata = {
  title: 'Sarath Menon | Artist',
  description: 'Portfolio site for Sarath Menon, Artist and Film Maker.',
}
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${raleway.variable} ${raleway_dots.variable} ${tangerine.variable} ${maine.variable}`}
      >
        <PreLoader />
        <Header />
        {children}
        <Contact />
      </body>
    </html>
  )
}
