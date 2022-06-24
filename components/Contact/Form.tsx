import Image from 'next/image'
import React from 'react'
import { contactData } from '../DummyData'

function Form() {
  return (
    <div className='Contact'>
      <div className='container'>
        <h2>Get in touch with us</h2>
        <div className='contact'>
          <div className='contact__form'>

            <h3>Drop us a message</h3>
            <p className='contact__form--text'>We will get back to you as soon as possible.</p>
            <form action="" className='contact__form--input'>
              <div className='contact__form--input__small'>
                <input type="name" placeholder='Full Name' />
                <input type="text" placeholder='Company Name' />
              </div>
              <input className='contact__form--input__big' type="email" placeholder='Work Email' />
              <input className='contact__form--input__big' type="text" placeholder='Subject' />
              <input className='contact__form--input__big' type="text" placeholder='Message' />
              <button className='btn__dark' type="submit">Send</button>
            </form>
          </div>
          <div className='contact__details'>
            {contactData.map((item) => (
              <div className='contact__details--item' key={item.id}>
                <Image src={`/Img/Contact/${item.icon}__icon.svg`} width={45} height={45}  alt="Icon" />
                <div>
                  <p>{item.text}</p>
                  <span>{item.smallText}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form