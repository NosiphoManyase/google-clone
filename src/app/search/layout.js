import SearchHeader from '@/components/SearchHeader'
import '../globals.css'

export const metadata = {
  title: 'Google Clone next js 13',
  description: 'Google clone by create Next js 13',
  icons: {
    icon: [{url: '/favicon.svg', type: 'image/svg'}]
  }

}

export default function searchLayout({ children }) {
  return (
    <div>
    <SearchHeader />
    {children}
    </div>
  )
}