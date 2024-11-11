import React, { useEffect } from 'react'
import "./App.css"
import { Home, About, Skills, Projects, Contact } from "./container"
import { Navbar } from './components'

const App = () => {
    // useEffect(()=>{
    //     document.addEventListener('contextmenu', (e) => {
    //         e.preventDefault();
    //       });
    // },[])

   
    return (
        <>
            <Navbar />
            <Home />
            {/* <About />
            <Skills />
            <Projects />
            <Contact /> */}

            <div>
                {/* Navbar */}
                <div>
                    <h1>Logo</h1>

                    <p>Home</p>
                    <p>About (Experience)</p>
                    <p>Skills</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </div>

                <div className='dotted-line'></div>

                {/* Home */}
                <div>
                    <div>
                        <p>
                            I am Shakthi Naarayanan a passionate Full-Stack javascript developer
                        </p>
                        <button>Download CV</button>
                    </div>
                    <div>
                        <p>Number</p>
                        <p>Email</p>
                        <span id="social-media-icons">
                            <span>Instagram</span>
                            <span>Linked In</span>
                            <span>Github</span>
                        </span>

                    </div>
                    <div>
                        <p>3+ years of experiences</p>

                        <p>4+ Programing languages</p>

                        <p>12+ completed projects</p>
                    </div>
                </div>
                <div className='dotted-line'></div>

                {/* About */}
                <div>
                    <p>Hello!!</p>
                    <p>
                        As a self-taught software developer, I bring extensive expertise in web development. I excel in developing MERN and MEAN stack projects and hold a Certified AWS Cloud Practitioner certification. With a strong technical background and passion for software development, I offer valuable skills to organizations seeking to build innovative applications.
                    </p>
                    <div>
                        <div>
                            <p>Software Development Engineer</p>
                            <p>SOFS Clean Energy</p>
                            <p>Apr 2023-Ongoing</p>
                        </div>
                        <div>
                            <p>Software Engineer</p>
                            <p>HCL Technologies</p>
                            <p>Aug 2021-Apr2023</p>
                        </div>
                        <div>
                            <p>Founder</p>
                            <p>App Dev Zone</p>
                            <p>2019-2021</p>
                        </div>
                        <div>
                            <p>Automation Engineer (intern)</p>
                            <p>Intel Technologies</p>
                            <p>Jan 2018 - Jun 2018</p>
                        </div>
                    </div>
                </div>

                <div className='dotted-line'></div>


                {/* Skills */}
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Javascript</li>
                    <li>Typescript</li>
                    <li>React Js</li>
                    <li>Next Js</li>
                    <li>Tailwind css</li>
                    <li>Node Js</li>
                    <li>Express Js</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>Redis</li>
                    <li>Mongo DB</li>
                    <li>My SQL</li>
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>Git</li>
                </ul>

                <div className='dotted-line'></div>
                {/* Project */}


                <p>E-commerce</p>

                <p>Doctor consulation application</p>

                <p>Express Tracker</p>

                <p>Virtual chat room</p>

                <p>Snake Game</p>

                <p> Rock paper scissors </p>

                <div className='dotted-line'></div>

                {/* Contact me */}

                <form action="">
                    <input type="text" placeholder='Your name' />
                    <input type="text" placeholder='Your email' />
                    <input type="text" placeholder='Your message' />
                    <input type='submit' value={"contact"} />
                </form>

                {/* Footer */}
                <div>
                    @2024 shakthinaarayanan.com
                </div>


            </div>
        </>
    )
}

export default App