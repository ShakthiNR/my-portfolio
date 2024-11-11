import { Icons  } from "./Icons"

const links = ['home', 'about', 'projects', 'skills', 'contact'];

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

export {
    links,
    Icons,
    openInNewTab
}