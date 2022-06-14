import Link from 'next/link'
import React from 'react'

type Props = {
  mainBackground: boolean
}

function More({ mainBackground}: Props) {
  return (
    <div  className={`More ${mainBackground === true && "More__background"}`}>
      <div className='container'>
        <div className='more'>
          <div className='more__heading'>
            <h2>More impressions, more conversions</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</p>
            <button className='btn__dark'><Link href="/Pricing" passHref>Get Free trial</Link></button>
          </div>
          <div className='more__img'>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default More