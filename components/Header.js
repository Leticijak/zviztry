// imports
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaFacebook, FaInstagram, FaTimes } from 'react-icons/fa'
import { createRef } from 'react'
import styles from '../styles/Header.module.css'

export default function Header() {
  let navi = createRef()
  let navig = createRef()
  let naviw = createRef()
  let myClick = () => {
    navi.current.classList.add('vidljivo')
    navig.current.classList.add('vidljivo')
    naviw.current.classList.add('vidljivo')
  }

  let closeClick = () => {
    navi.current.classList.remove('vidljivo')
    navig.current.classList.remove('vidljivo')
    naviw.current.classList.remove('vidljivo')
  }

  return (
    <>
      <div classNameName='container-fluid topz'>
        <button classNameName='navi-btn openz-btn' onClick={myClick}>
          <FaBars className={styles.icons} />
        </button>
      </div>

      <div ref={navi} className='navi navi-black'>
        <div ref={navig} className='navi navi-green'>
          <div ref={naviw} className='navi navi-white'>
            <button onClick={closeClick} className='navi-btn close-btn'>
              <FaTimes className={styles.close} />
            </button>
            <img
              src='/logo2.png'
              alt='green circle with dark green logo representing shopping bag with chia leaves '
              className='logoz'
            />

            <ul className='listz'>
              <li>
                <Link href='/'>
                  <a title='Chia Buy Plots | Home'>Home</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a title='Chia Buy Plots | Contact'>Contact</a>
                </Link>
              </li>
            </ul>
            <div className='row justify-content-md-center'>
              <div className='text-center'>
                <a
                  title='Instagram link'
                  className=''
                  href='https://www.instagram.com/buychiaplots/'
                  alt='Link to instagram account'
                  target='_blank'
                >
                  <FaInstagram className={styles.links} />
                </a>
                <a
                  title='Facebook link'
                  className=''
                  href='https://www.facebook.com/LettieChia'
                  alt='Link to facebook account'
                  target='_blank'
                >
                  <FaFacebook className={styles.links} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
