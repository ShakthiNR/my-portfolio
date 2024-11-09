import { FaRegMoon } from "react-icons/fa"
import { FiSun } from "react-icons/fi"
import { HiMenuAlt2, HiX } from "react-icons/hi"


export const Icons = ({ name }) => {

    const icons = {
        menu: <HiMenuAlt2 size={25} />,
        close: <HiX size={25} />,
        showBrightness: <FiSun size={20} />,
        hideBrightness: <FaRegMoon size={20} />
    }

    return (
        icons[name]
    )
}