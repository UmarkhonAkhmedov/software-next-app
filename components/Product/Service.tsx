import Image from 'next/image'
import React from 'react'
import { serviceData } from '../DummyData'

function Service() {
  return (
    <div className='Service'>
      <div className='Service__container'>
        <h2>Get the best out of your company with our service</h2>
        <div className='service'>
          {serviceData.map((item) => (
            <div key={item.id} className="service__item">
              <Image src={`/Img/Product/service__${item.img}.svg`} width={50} height={50} objectFit="contain" alt="" />
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service