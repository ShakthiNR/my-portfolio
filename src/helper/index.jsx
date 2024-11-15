import { Icons  } from "./Icons"
import LottieWrapper from "./LottieWrapper"
const links = ['home', 'about',  'skills', 'projects', 'contact'];

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

export {
    links,
    Icons,
    experience,
    openInNewTab,
    LottieWrapper
}

const experience = [
  {
    _id: 4,
    year: "2023",
    company: "Solar for schools",
    role: "Software Development Engineer"
  },{
    _id: 3,
    year: "2021",
    company: "HCL Technologies",
    role: "Software Engineer"
  },
  {
    _id: 2,
    year: "2019",
    company: "App Dev Zone",
    role: "Founder"
  },
  
  {
    _id: 1,
    year: "2018",
    company: "Intel Technologies",
    role: "Automation Engineer (intern)"
  }
]