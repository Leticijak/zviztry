// imports
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className='container'>
      <Header />

      {children}
      <Footer />
    </div>
  )
}
