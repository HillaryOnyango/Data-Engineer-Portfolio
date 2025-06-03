import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';



const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">   </span>
        </div>
        <img src={bg} alt="Hello" className='bg' />
    </section>
  )
}

export default Intro;