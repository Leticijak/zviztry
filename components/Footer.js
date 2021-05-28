// imports
import Link from 'next/link'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='text-center p-5'>
          <div className='row justify-content-md-center'>
            <Link href='https://www.instagram.com/buychiaplots/'>
              <a
                title='Instagram link'
                className='p-2'
                alt='Link to instagram account webpage www.chiabuyplots.com'
                target='_blank'
              >
                <FaInstagramSquare />
              </a>
            </Link>

            <Link href='https://www.facebook.com/LettieChia'>
              <a
                title='Facebook link'
                className='p-2'
                alt='Link to facebook account webpage www.chiabuyplots.com'
                target='_blank'
              >
                <FaFacebookSquare />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <p className='text-center'>
          &copy; CHIABUYPLOTS 2021, ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  )
}
