import Image from 'next/image'
import React from 'react'
import { corporateData } from '../DummyData'

function Corporate() {
  return (
    <div className='Cor'>
      <div className='container'>
        <h2>Our corporate values</h2>
        <p className='Cor__text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
        <div className='cor'>
          {corporateData.map((item) => (
            <div key={item.id}>
              <Image src={`/Img/About/values__${item.icon}.svg`} width={40} height={40} alt="" />
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Corporate