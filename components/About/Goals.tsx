import React from 'react'
import Heading from '../Heading'

function Goals() {
  return (
    <div className='Goals'>
      <div className='container'>
        <div className='goals'>
          <div className='goals__item'>
            <Heading position='left' title='Our Goals' heading='To upscale your business
            to the next level' />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          </div>
          <div className='goals__item'>
            <Heading position='left' title='Our Vision' heading='To provide solutions for growing companies' />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Goals