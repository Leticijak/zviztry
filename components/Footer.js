// imports
import Link from 'next/link'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='text-center p-5'>
          <div className='col justify-content-md-center'>
            <Link href='https://www.instagram.com/buychiaplots/'>
              <a
                title='Instagram link'
                className='p-2'
                alt='Link to instagram account webpage www.chiabuyplots.com'
                target='_blank'
              >
                <FaInstagramSquare className={styles.links} />
              </a>
            </Link>

            <Link href='https://www.facebook.com/LettieChia'>
              <a
                title='Facebook link'
                className='p-2'
                alt='Link to facebook account webpage www.chiabuyplots.com'
                target='_blank'
              >
                <FaFacebookSquare className={styles.links} />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <p className='text-center py-5'>
          &copy; CHIABUYPLOTS 2021, ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  )
}
