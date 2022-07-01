import Image from 'next/image'
import React from 'react'
import { testimonialsData } from '../DummyData'

function Testimonials() {
  return (
    <div className='container'>
      <h2 className='testimonials__heading'>The stunning results our customers have experienced</h2>
      <div className='testimonials'>
        {testimonialsData.map((item) => (
          <div key={item.id} className='testimonials__item'>
            <p>{item.text}</p>
            <Image src={`/Img/Home/testimonials__${item.img}.svg`} width={55} height={55} objectFit="contain" alt="" />
            <h5>{item.name}</h5>
            <h6>{item.job}</h6>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials