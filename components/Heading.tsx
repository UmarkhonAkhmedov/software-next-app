import React from 'react'

type Props = {
  heading: string
  title: string
  position: string
}

function Heading({ heading, title, position }: Props) {
  return (
      <div className={`Heading ${position === 'center' ? "HeadingOne" : "HeadingTwo"}`}> 
        <h3>{title}</h3>
        <h2 style={{margin: '0 auto'}}>{heading}</h2>

        
      </div>
  )
}

export default Heading
// className={`h-6 cursor-pointer text-gray-300 ${imageBoxOpen && 'text-blue-300'}`}