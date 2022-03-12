import React from 'react'
import './exclusiveNews.css'
import Image4 from '../../Assets/Image4.png'

const Exclusivenews = () => {
  return (
    <div className='exclusiveNewsSection'>
      <div className='exclusiveNewsContainer' >
        <div className="exclusiveTitle">Exclusive </div>
        <div className="exclusiveTitle">News Today</div>
        <div className="exclusiveDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, alias eaque ad vel repudiandae aut eius voluptatibus, et distinctio, quibusdam assumenda omnis.</div>
        <div className="exclusiveButton">Learn More</div>
      </div>
      <div className='exclusiveImageContainer'>
         <img className="exclusiveImage" src={Image4} alt="" />
      </div>
    </div>
  )
}

export default Exclusivenews