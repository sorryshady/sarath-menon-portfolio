import PreLoader from './components/PreLoader/PreLoader'
import {
  Raleway_Dots,
  Raleway,
  Petit_Formal_Script,
  Tangerine,
} from 'next/font/google'
import './globals.css'
import Header from './components/Nav/Header'
import Contact from './components/Contact/Contact'

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
const petit = Petit_Formal_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-petit',
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
        className={`${raleway.variable} ${raleway_dots.variable} ${petit.variable} ${tangerine.variable}`}
      >
        <PreLoader />
        <Header />
        {children}
        <Contact />
      </body>
    </html>
  )
}
