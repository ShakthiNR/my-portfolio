import React, { useState } from 'react'
import "./navbar.css"
import { links } from '../../helper';

import { HiMenuAlt2, HiX } from "react-icons/hi";
import { FaRegMoon  } from "react-icons/fa";
import { FiSun  } from "react-icons/fi";

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [brightness, setBrightness] = useState(false);


    const navLinkClassName = isClicked ? `nav__links active` : `nav__links`;

  return (
    <nav>
        
         <div className="nav__logo">Logo</div>

         <ul className={navLinkClassName}>
            {links.map((elm, index) => (
              <li key={`link-${index}`}>
                <a href={`#${elm}`} onClick={() => setIsClicked(!isClicked)}>
                  {elm}
                </a>
              </li>
            ))}
          </ul>
          
        
          <div className="nav__toggle_button center">
              <div className='brightness center' onClick={()=> setBrightness(!brightness)}>
                {brightness ? <FiSun /> : <FaRegMoon />}
              </div>
              <button className='center' onClick={() => setIsClicked(!isClicked)}>
                  {isClicked ? <HiX /> : <HiMenuAlt2 /> }
              </button>
          </div>

        

    </nav>
  )
}

export default Navbar