import './globals.css'

export const metadata = {
  title: 'Google Clone next js 13',
  description: 'Google clone by create Next js 13',
  icons: {
    icon: [{url: '/favicon.svg', type: 'image/svg'}]
  }

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
