import Image from 'next/image'
import React from 'react'
import { plansData } from '../DummyData'

function Plans() {
  return (
    <div className='Plans'>
      <div className='container'>
        <div className='Plans__header'>
          <h2>Pricing plans that suit you</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          <div className='Plans__header--btn'>
            <button className='btn__dark Plans__header--btn__month'>Monthly</button>
            <button className='Plans__header--btn__year btn__dark'>Yearly</button>
          </div>
        </div>
        <div className='plans'>
          {plansData.map((item) => (
            <div key={item.id} className='plans__item'>
              <div className='plans__item--header'>
                <Image src={`/Img/Pricing/${item.icon}__icon.svg`} width={52} height={52} alt="Icon" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              </div>
              <hr className='plans__item--line' />
              <ul className='plans__item--list'>
                {item.features.map((feature, id) => (
                  <div key={id}>
                    <Image src="/Img/Pricing/pricing__tick.svg" width={22} height={22} alt="" />
                    <li>{feature}</li>
                  </div>
                ))}
              </ul>
              <p className='plans__item--text'>{item.text}</p>
              <span className='plans__item--price'>{item.price}</span>
              <span className='plans__item--priceInfo'>{item.priceInfo}</span>
              <button className='btn__dark'>Get started</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Plans