import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText"> I'm <span className="introName">Hillary Onyango Amolo</span> <br />Data Engineer </span>
    <p className="introPara">
        I am a skilled and detail-oriented data engineer passionate in
        building <br /> scalable data pipelines, managing large datasets, and transforming raw data <br />
        into actionable insights for data-driven decision making.
    </p>
    <Link> <button className="btn"> <img src= {btnImg} alt=" Hire Me"  className= 'btnImg' /> Hire Me </button> </Link>
        </div>
    

        <img src={bg} alt="Hello" className='bg' />
    </section>
  )
}

export default Intro;