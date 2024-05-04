import './globals.css'
import Nav from './components/Nav'
import { DM_Sans } from 'next/font/google'
import Footer from './components/Footer';

export const metadata = {
  title: 'Startup Landing Page',
  description: 'Startup Landing Page',
  
}
const font = DM_Sans({
  weight:["400","700"],
  subsets:['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={font.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
