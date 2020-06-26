import React, {useContext} from 'react';
import { useRouter } from 'next/router';
import FlyOutMenu from './fly-out-menu';
import HeaderBanner from './header-banner';

import { GlobalContext } from '../context/GlobalState';

export default function HeaderBar() {

  const {setMenuView, menuView} = useContext(GlobalContext);
  const router = useRouter()

  let chevronUp = <svg 
    className="text-purple-600 h-10 w-10 group-hover:text-purple-500 group-focus:text-purple-500 transition ease-in-out duration-150" 
    viewBox="0 0 20 20" 
    fill="currentColor">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
  </svg>;

  let chevronDown = <svg 
    className="text-purple-600 h-10 w-10 group-hover:text-purple-500 group-focus:text-purple-500 transition ease-in-out duration-150" 
    fill="currentColor" 
    viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"></path>
  </svg>;

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
  let subtitle;
  let bg;

  if (router.pathname == `/podcasts`) {
    icon = podcastIcon;
    title = "Podcast";
    subtitle = "Listen to stories of people who've overcome chronic pain.";
    bg = "bg-purple-400"
  } else if (router.pathname == '/blog') {
    icon = blogIcon;
    title = "Blog";
    subtitle = "Read the latest science about healing and wellness.";
    bg = "bg-purple-400"
  } else if (router.pathname == '/studio') {
    icon = studioIcon;
    title = "Studio";
    subtitle = "Take action with Tara Lynn inside the virtual studio.";
    bg = "bg-purple-400"
  } else {
    icon = "";
    title = "";
    subtitle = "";
    bg = "bg-white"; 
  }

  return (    
      <div className="flex w-full border-b items-center justify-between">
        <div className="ml-5 w-5/6 lg:w-3/4">
         <HeaderBanner
          icon={icon}
          title={title}
          subtitle={subtitle}
          bg={bg}
         />
        </div>
        <div className="w-1/6 lg:w-1/4 flex justify-end flex-shrink-0 text-sm font-semibold pr-3 flex items-center">
          <button 
            type="button" 
            className="group text-purple-600 inline-flex items-center space-x-1 text-base leading-6 font-bold hover:text-purple-900 focus:outline-none focus:text-purple-900 transition ease-in-out duration-150"
            onClick={() => setMenuView(menuView) }
          >
            <span className="hidden lg:flex">Menu</span>
            {menuView ? 
              chevronDown
              :
              chevronUp
            }
          </button>
        </div>
        <FlyOutMenu />
      </div> 
  );
};
