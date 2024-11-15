import React from 'react'
import "./home.scss"
import { Icons, LottieWrapper, openInNewTab } from '../../helper'
import scrollDown from "../../assets/scroll-down.json"
import { MyImage } from '../../helper/images';

const Home = () => {

  const links = {
    linkedIn: "https://www.linkedin.com/in/shakthinr",
    github:"https://github.com/ShakthiNR"
  }

  const sendMail = () => {
    window.location = "mailto:shakthinaarayanan@gmail.com";
  }


  return (
    <section id="home">
      {/* <div className='home__social-media-icons'>

      <div className='center' id="icon-animi"><Icons name="github" handleClick={()=> openInNewTab(links.github)}/></div>
       
        <div className='center' id="icon-animi"><Icons name="gmail" handleClick={sendMail} /></div>
        <div className='center' id="icon-animi"><Icons name="linkedIn" handleClick={()=> openInNewTab(links.linkedIn)}/></div>
        
      </div> */}
      <div className='home__content' >
        <div> 
          <img src={MyImage} alt="my-image" className='home__content-img' />
        </div>
        <div className='home__content-'>
          <h2 className='home__intro'>👋 Hey, I'm Shakthi NR </h2>
          <div className='home__subsection'>A Solution-Focused <span> Full Stack Web Developer</span> from <span>India</span> , Creating Cutting-Edge Web Applications that Fuel Product Success and Enhance Digital Performance.</div>
          
          <div style={{marginTop: "1.3rem"}}><a className='home__download' id="icon-animi" href="/MyResume.pdf" download>Download CV</a> </div>
        </div>
       
      </div>

      {/* <div className='home__scroll-down'>
        <LottieWrapper json={scrollDown}/>
      </div> */}


    </section>
  )
}

export default Home