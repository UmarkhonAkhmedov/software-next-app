import Image from 'next/image'
import React from 'react'
import { allPostsData } from '../DummyData'

function BlogItem() {
  return (
    <div className='AllPosts'>
      <div className='container'>
        <h2>All posts</h2>
        <div className='allposts'>
          {allPostsData.map((item) => (
            <div key={item.id} className="allposts__item">
              <Image src={`/Img/Blog/post__${item.icon}.svg`} width={370} height={230} alt="" />
              <h4>{item.heading}</h4>
              <p>{item.text}</p>
              <span>{item.author} | {item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogItem