import Image from 'next/image'
import React from 'react'
import { brandIcons } from './DummyData'

function Brands() {
  return (
    <div className='container'>
      <div className='brands'>
        {brandIcons.map((img, id) => (
          <Image key={id} src={`/Img/Home/brand__${img}.svg`} width={160} height={35} priority />
        ))}
      </div>
    </div>
  )
}

export default Brands