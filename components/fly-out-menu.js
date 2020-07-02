import React, {useContext} from 'react'
import { useRouter } from 'next/router';
import FlyOutMenuItem from './fly-out-menu-item'
import SubscribeFormHorizontal from './subscribe-form-horizonal'

import { GlobalContext } from '../context/GlobalState';

export default function flyOutMenu({menuItems}) {

  const {menuView} = useContext(GlobalContext);
  const router = useRouter()

  let blog = menuItems.find(o => o.title === 'Blog');
  let studio = menuItems.find(o => o.title === 'Studio');
  let podcast = menuItems.find(o => o.title === 'Podcasts');
  let about = menuItems.find(o => o.title === 'About');
  let home = menuItems.find(o => o.title === 'Home');
  
  let blogIcon = <svg fill="none" className="h-6 w-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>;

  let podcastIcon = <svg fill="none" className="h-6 w-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>;

  let studioIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 100 100">
    <g transform="translate(50 50) scale(0.69 0.69) rotate(0) translate(-50 -50)">
      <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
        <path fill="#FFFFFF" d="M20,4l-4,2.3V5c0-1.1-0.9-2-2-2H2C0.9,3,0,3.9,0,5v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-1.3l4,2.3V4z   M14,15H2V5h12L14,15z M18,12.6l-2-1.1V8.6l2-1.1V12.6z"></path>
      </svg>
    </g>
  </svg>;

  let aboutIcon = <svg fill="none" className="h-6 w-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>;

  let homeIcon = <svg fill="none" className="h-6 w-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>;

  return (
    <div className={`z-20 absolute top-0 right-0 mt-16 px-2 w-screen max-w-md sm:px-0 lg:max-w-3xl ${menuView ? '' : 'hidden'}`}>
      <div className="rounded-lg shadow-lg">
        <div className="rounded-lg shadow-xs overflow-hidden">
          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
            { router.pathname !== '/blog' ? (
              <FlyOutMenuItem 
                icon={blogIcon}
                title={blog.title}
                subtitle={blog.subTitle}
                link={"/blog"}
              />
              ) : ("") 
            }
            { router.pathname !== '/podcasts' ? (
              <FlyOutMenuItem 
                icon={podcastIcon}
                title={podcast.title}
                subtitle={podcast.subTitle}
                link={"/podcasts"}
              />
              ) : ("") 
            }
            { router.pathname !== '/studio' ? (
              <FlyOutMenuItem 
                icon={studioIcon}
                title={studio.title}
                subtitle={studio.subTitle}
                link={"/studio"}
              />
              ) : ("") 
            }
            { router.pathname !== '/about' ? (
              <FlyOutMenuItem 
                icon={aboutIcon}
                title={about.title}
                subtitle={about.subTitle}
                link={"/about"}
              />
              ) : ("")
            }
            { router.pathname !== '/' ? (
              <FlyOutMenuItem 
                icon={homeIcon}
                title={home.title}
                subtitle={home.subTitle}
                link={`/`}
              />
              ) : ("") 
            }
          </div>
          <div className="block p-4 lg:p-5 border-t bg-white sm:p-8">
            <span className="-m-3 py-3 sm:py-0 lg:py-3 flow-root space-y-1 rounded-md">
              <div className="flex justify-center items-center space-x-3">
                <SubscribeFormHorizontal />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}







