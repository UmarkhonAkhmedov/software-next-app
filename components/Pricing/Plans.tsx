import React from 'react'

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

        </div>
      </div>
    </div>
  )
}

export default Plans