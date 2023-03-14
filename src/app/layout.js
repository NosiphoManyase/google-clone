import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'Google Clone next js 13',
  description: 'Google clone by create Next js 13',
  icons: {
    icon: '/favicon.svg'
  }

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>
        
        {children}
        
        <Footer />
      </body>
    </html>
  )
}
