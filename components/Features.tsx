import Image from 'next/image'
import React from 'react'
import { featuresData } from './DummyData'

function Features() {
  return (
    <div className='container'>
      <h2 className='features__heading'>Features</h2>
      <div className='features'>
        {featuresData.map((item) => (
          <div key={item.id} className='features__item'>
            <Image src={`/Img/Home/features__${item.img}.svg`} width={55} height={55} objectFit="contain"/>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features