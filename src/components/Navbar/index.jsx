import React, { useState } from 'react'
import "./navbar.css"
import { Icons, links } from '../../helper';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [brightness, setBrightness] = useState(false);


  const navLinkClassName = isClicked ? `nav__links active` : `nav__links`;

  return (
    <nav>

      <div className="nav__logo">
        <a href="#">Shakthi NR</a>
      </div>

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
        <div className='brightness center' onClick={() => setBrightness(!brightness)}>
          {brightness ? <Icons name="showBrightness" /> : <Icons name="hideBrightness" />}
        </div>
        <button className='center' onClick={() => setIsClicked(!isClicked)}>
          {isClicked ? <Icons name="close" /> : <Icons name="menu" />}
        </button>
      </div>

    </nav>
  )
}

export default Navbar