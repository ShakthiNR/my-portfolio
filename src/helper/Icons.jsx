import { FaRegMoon } from "react-icons/fa"
import { FiSun } from "react-icons/fi"
import { HiMenuAlt2, HiX } from "react-icons/hi"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Gmail } from "./images";

export const Icons = ({ name, handleClick }) => {

    const icons = {
        menu: <HiMenuAlt2 className="icon-md" />,
        close: <HiX className="icon-md" />,
        showBrightness: <FiSun className="icon-sm"  />,
        hideBrightness: <FaRegMoon className="icon-sm" />,
        linkedIn: <FaLinkedin className="icon-md mobile-social-icon"  color="#0077B5" onClick={handleClick}/>,
        github: <FaGithub className="icon-md mobile-social-icon"  color="#171515" onClick={handleClick}/>,
        gmail: <img src={Gmail} className="icon-md instagram" onClick={handleClick}/>
    }

    return (
        icons[name]
    )
}