import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { navItems } from './DummyData'
import { MenuIcon, XCircleIcon } from '@heroicons/react/solid'


function Navbar() {
  const [open, setOpen] = useState(false)

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
              <Link href="/" passHref>Home</Link>
              {navItems.map((item) => (
                <Link href={`/${item}`} passHref>{item}</Link>
              ))}
            </div>
            <div className='nav__list--button'>
              <Link href="/pricing" passHref><button className='btn__dark'>Free trial</button></Link>
            </div>
          </div>
          <MenuIcon onClick={() => setOpen(!open)} className='nav__icon'/>
          {open && (
            <div className='nav__mob'>
              <div className='nav__mob--link'>
                <Link href="/" passHref>Home</Link>
                {navItems.map((item) => (
                  <Link href={`/${item}`} passHref>{item}</Link>
                ))}
              </div>
              <div className='nav__mob--button'>
                <Link href="/pricing" passHref><button className='btn__dark'>Free trial</button></Link>
              </div>
            </div>
          )}
        </div>
        <div>
      </div>
      </div>
    </div>
  )
}

export default Navbar