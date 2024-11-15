import { Icons, openInNewTab } from "../../helper";
import  "./SocialIcons.scss";


const SocialIcons = () => {
  const links = {
    linkedIn: "https://www.linkedin.com/in/shakthinr",
    github: "https://github.com/ShakthiNR",
  };

  const sendMail = () => {
    window.location = "mailto:shakthinaarayanan@gmail.com";
  };
  return (
    <div className="social-media-icons">
      <div className="center" id="icon-animi">
        <Icons name="github" handleClick={() => openInNewTab(links.github)} />
      </div>

      <div className="center" id="icon-animi">
        <Icons name="gmail" handleClick={sendMail} />
      </div>
      <div className="center" id="icon-animi">
        <Icons
          name="linkedIn"
          handleClick={() => openInNewTab(links.linkedIn)}
        />
      </div>
    </div>
  );
};
export default SocialIcons;