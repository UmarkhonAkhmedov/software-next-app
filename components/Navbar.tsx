import Image from 'next/image'
import React from 'react'


function Navbar() {
  return (
    <div className='Navbar'>
      <div className='container'>
        <div className='navbar'>
          <Image width={138} height={30} src="/Img/website__logo.svg" alt="Website Logo" objectFit='contain'/>
        </div>
        <div>
      </div>
      </div>
    </div>
  )
}

export default Navbar