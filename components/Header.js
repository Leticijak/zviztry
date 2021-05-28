// imports
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <nav>
      <div className='logo'>
        <Image width={40} height={40} src='/logo2.png' alt='' />
      </div>{' '}
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>
    </nav>
  )
}
