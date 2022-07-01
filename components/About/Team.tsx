import Image from 'next/image'
import React from 'react'
import { teamData } from '../DummyData'

function Team() {
  return (
    <div className='Team'>
      <div className='container'>
        <div className='team'>
          <div className='team__heading'>
            <h3>Our talented Team</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
          </div>
          <div className='team__list'>
            {teamData.map((item, id) => (
              <div key={id} className='team__list--item'>
                <Image src={`/Img/About/team__${item.img}.svg`} width={220} height={210} alt="" objectFit='cover' />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team