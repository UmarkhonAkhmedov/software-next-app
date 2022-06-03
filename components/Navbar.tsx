import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navItems } from './DummyData'


function Navbar() {

  return (
    <div className='Navbar'>
      <div className='container'>
        <div className='nav'>
          <div className='nav__logo'>
            <Link href={"/"} passHref>
              <Image width={115} height={28} src="/Img/website__logo.svg" alt="Website Logo" objectFit='contain' /> 
            </Link>
          </div>
          <div className='nav__list'>
            <div className='nav__list--link'>
              {navItems.map((item) => (
                <Link href={`/${item}`} passHref className='active'>{item}</Link>
              ))}
            </div>
            <div className='nav__list--button'>
              <Link href="/pricing" passHref><button className='btn__dark'>Free trial</button></Link>
            </div>
          </div>
        </div>
        <div>
      </div>
      </div>
    </div>
  )
}

export default Navbar