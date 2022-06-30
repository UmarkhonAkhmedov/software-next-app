import Image from 'next/image'
import React from 'react'
import { qualityData } from '../DummyData'


function Quality() {
  return (
    <div className='Quality'>
      <div className='container'>
        <div className="quality">
          {
            qualityData.map((quality) => (
              <div key={quality.id} className='quality__list'>
                <div className='quality__list--img'>
                  <Image src={`/Img/Home/quality__${quality.img}.svg`} layout="fill" alt="" />
                </div>
                <h4>{quality.heading}</h4>
                <p>{quality.text}</p>
              </div>
            ))  
          }
        </div>
      </div>
    </div>
  )
}

export default Quality