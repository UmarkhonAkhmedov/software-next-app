import Link from 'next/link'
import React from 'react'

function Ready() {
  return (
    <div className='Ready'>
      <div className='container'>
        <div className='ready'>
          <h2>Are you ready to grow your business with us?</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
          <Link href="/pricing" passHref>
            <button className='btn__dark'>View Pricing</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Ready