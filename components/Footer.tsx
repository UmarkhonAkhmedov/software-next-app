import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { footerProduct, footerSocialIcons } from './DummyData'

function Footer() {
  return (
    <div className='Footer'>
      <div className='container'>
        <div className='footer'>
          <div className='footer__list footer__company'>
            <h4>Company</h4>
            <Link href="/about" passHref>About Us</Link>
            <Link href="/" id="quality" passHref>About Us</Link>
            <Link href="/pricing" passHref>Pricing</Link>
            <Link href="/" id="testimonials" passHref>About Us</Link>
          </div>
          <div className='footer__list footer__resources'>
            <h4>Resources</h4>
            <Link href="/" passHref>Privacy Policy</Link>
            <Link href="/" id="quality" passHref>Terms and Condition</Link>
            <Link href="/blog" passHref>Blog</Link>
            <Link href="/contact" passHref>Contact Us</Link>
          </div>
          <div className='footer__list footer__product'>
            <h4>Product</h4>
            {footerProduct.map((product) => (
              <Link href="/" passHref>{product}</Link>
            ))}
          </div>
          <div className='footer__info'>
            <div className='footer__info--logo'>
              <Image src="/Img/footer__logo.svg" layout='fill' alt="Website Logo" />
            </div>
            <p>Subscribe to our Newsletter</p>
            <form>
              <input type="email" placeholder='Enter your Email' />
              <button className='btn__dark' type='submit'>Subscribe</button>
            </form>
          </div>
        </div>
        <div className='copyright'>
          <div className='copyright__line'></div>
          <div className='copyright__list'>
            <p>© Copyright Finsweet 2022</p>
            <div className='copyright__list--icons'>
              {footerSocialIcons.map((icon, i) => (
                <a key={i} href={`https://www.${icon}.com`}>
                  <Image key={i} src={`/Img/footer__${icon}.svg`} layout="fill" alt="" />
                </a>
              ))}
            </div>
          </div>
          <div className='copyright__line'></div>
        </div>
      </div>
    </div>
  )
}

export default Footer