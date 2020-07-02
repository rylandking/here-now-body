import React, {useContext} from 'react';
import { useRouter } from 'next/router';
import FlyOutMenu from './fly-out-menu';
import HeaderBanner from './header-banner';

import { GlobalContext } from '../context/GlobalState';

export default function HeaderBar({menuItems}) {

  const {setMenuView, menuView} = useContext(GlobalContext);
  const router = useRouter()

  let blog = menuItems.find(o => o.title === 'Blog');
  let studio = menuItems.find(o => o.title === 'Studio');
  let podcast = menuItems.find(o => o.title === 'Podcasts');
  let about = menuItems.find(o => o.title === 'About');
  let home = menuItems.find(o => o.title === 'Home');

  let blogIcon = <svg fill="none" className="h-8 w-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>;

  let podcastIcon = <svg fill="none" className="h-8 w-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>;

  let studioIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 100 100">
    <g transform="translate(50 50) scale(0.69 0.69) rotate(0) translate(-50 -50)">
      <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
        <path fill="#FFFFFF" d="M20,4l-4,2.3V5c0-1.1-0.9-2-2-2H2C0.9,3,0,3.9,0,5v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-1.3l4,2.3V4z   M14,15H2V5h12L14,15z M18,12.6l-2-1.1V8.6l2-1.1V12.6z"></path>
      </svg>
    </g>
  </svg>;

  let icon;
  let title;
  let bg;
  let bgWrapper;
  let menuTextColor;
  let borderB;
  let cursor;
  let paddingR = "pr-3";

  if (router.pathname == `/podcasts`) {
    icon = podcastIcon;
    title = podcast.title;
    bg = "bg-purple-400"
    bgWrapper = "bg-purple-400"
    menuTextColor = "text-white"
    borderB = ""
    paddingR
    cursor = "cursor-pointer"
  } else if (router.pathname == '/blog') {
    icon = blogIcon;
    title = blog.title;
    bg = "bg-purple-400"
    bgWrapper = "bg-purple-400"
    menuTextColor = "text-white"
    borderB = ""
    paddingR
    cursor = "cursor-pointer"
  } else if (router.pathname == '/studio') {
    icon = studioIcon;
    title = studio.title;
    bg = "bg-purple-400"
    bgWrapper = "bg-purple-400"
    menuTextColor = "text-white"
    borderB = ""
    paddingR
    cursor = "cursor-pointer"
  } else if (router.pathname == '/about') {
    icon = "";
    title = "";
    bg = "bg-white";
    bgWrapper = "bg-white"
    menuTextColor = "text-purple-600" 
    borderB = ""
    paddingR = "pr-0"
    cursor = ""
  }  else {
    icon = "";
    title = "";
    bg = "bg-white";
    bgWrapper = "bg-white"
    menuTextColor = "text-purple-600" 
    borderB = "border-b"
    paddingR
    cursor = ""
  }

  let menuIcon = <svg 
    className={`h-8 w-8 group-hover:text-purple-500 group-focus:text-purple-500 transition ease-in-out duration-150 ${menuTextColor}`}
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth="2" 
    viewBox="0 0 24 24" 
    stroke="currentColor">
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>;

  let xIcon = <svg 
    className={`h-8 w-8 group-hover:text-purple-500 group-focus:text-purple-500 transition ease-in-out duration-150 ${menuTextColor}`}
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth="2" 
    viewBox="0 0 24 24" 
    stroke="currentColor">
      <path d="M6 18L18 6M6 6l12 12"></path>
    </svg>

  return (    
      <div className={`flex w-full ${borderB} justify-between`}>
         <HeaderBanner
          icon={icon}
          title={title}
          bg={bg}
          cursor={cursor}
         />  
        <div className={`w-1/6 lg:w-1/4 flex justify-end flex-shrink-0 text-sm font-semibold ${paddingR} flex items-center ${bg}`}>
          <button 
            type="button" 
            className={`group inline-flex items-center space-x-1 mr-2 text-base leading-6 font-bold focus:outline-none transition ease-in-out duration-150 ${menuTextColor}`}
            onClick={() => setMenuView(menuView) }
          >
            <span className="hidden lg:flex mr-3">{menuView ? "Close" : "Menu"}</span>
            {menuView ? 
              xIcon
              :
              menuIcon
            }
          </button>
        </div>
        <FlyOutMenu
          menuItems={menuItems}
        />
      </div> 
  );
};
