'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex items-center">
            <div className="shrink-0 mr-4">
              <Logo />
            </div>
            <p className='text-black font-semibold'>CEF of Tioga County Inc.</p>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
               {/*<li>
              <Link href="/summercampsignup" className="font-medium text-[#F15A24] hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Summer Camp Sign-up</Link>
               </li>*/}
              <li>
                <Link href="/ministries" className="font-medium text-[#F15A24] hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Ministries</Link>
              </li>
              <li>
                <Link href="/events" className="font-medium text-[#F15A24] hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Events</Link>
              </li>
              <li>
                <Link href="/connect" className="font-medium text-[#F15A24] hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Connect</Link>
              </li>
              <li>
                <Link href="/about" className="font-medium text-[#F15A24] hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">About Us</Link>
              </li>
              <li>
                <Link href="/whatwebelieve" className="font-medium text-[#F15A24] hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">What We Believe</Link>
              </li>
              <li>
                <script type="text/javascript" defer src="https://donorbox.org/install-popup-button.js"> </script>
                <a className="dbox-donation-button btn-sm text-white bg-[#F15A24] hover:bg-gray-800 ml-3" href="https://donorbox.org/website-donations-283">Donate</a>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
