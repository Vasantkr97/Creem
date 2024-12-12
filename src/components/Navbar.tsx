import { RiCloseFill, RiMenu3Line } from "@remixicon/react";
import { useState } from "react"
import { navLinks } from "../Constants/Enable";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-4 inset-x-0 z-50 m-2">
      <div className="max-w-7xl mx-auto w-[95%] lg:full">
        {/* for large screen */}
        <div className="">
          <div className="relative  flex w-full justify-between px-4 py-2 bg-neutral-800 rounded-full">
            <div className="flex flex-row z-10 gap-2 items-center">
              <a href="/" className="relative z-20 mr-4 flex items-center py-1 px-2 gap-2 text-sm font-normal text-black">
                <img src="https://www.creem.io/_next/image?url=https%3A%2F%2Fnucn5fajkcc6sgrd.public.blob.vercel-storage.com%2Fcreem-icon-peach-TUPs31vHVRGWsxVlbie6kdL0KyFBQC.svg&w=32&q=75" alt="logo" width='25' height='25' className="h-auto max-w-[100%] "/>
                <span className="font-medium text-white">Creem</span>
              </a>
              <div className="hidden md:flex items-center gap-1.5">
                {navLinks.map((link, ind) => (
                  <a key={ind} className="text-[hsl(22_100%_79.8%)] text-sm flex items-center justify-center rounded-full px-4 py-2 hover:bg-neutral-800 leading-[110%]">{link}</a>
                ))}
              </div>
            </div>
            
            {/* right: buttons hidden on mobile */}
            <div className="hidden md:flex items-center z-10">
              <a className="relative z-10 flex border-[1px] border-neutral-700 text-sm text-white bg-neutral-900 hover:bg-black/90 px-4 py-2 rounded-full font-medium items-center justify-center">Login</a>
            </div>

            {/* Hamburger */}
            <div className="md:hidden z-10">
              <button onClick={toggleMenu} className="">
                { isOpen ? <RiCloseFill /> : <RiMenu3Line /> }
              </button>
            </div>
            <span className="absolute inline-block inset-x-0 top-1/2 w-[91%] mx-auto transform -translate-y-1/2 h-[9px] scale-[2.5] bg-gradient-to-t from-neutral-900 via-black to-neutral-900 rounded-full blur-sm z-0"></span>
          </div>
        </div>
      </div>

      
      {/* For Mobile Screen */}
      {isOpen && (
          <div className="md:hidden bg-black flex flex-col space-y-6 mt-8 p-8">
            {navLinks.map((link, ind) => (
              <a key={ind}>{link}</a>
            ))}
            <a className="relative z-10 flex border-[1px] border-neutral-100 text-sm text-white bg-neutral-900 hover:bg-black/90 px-4 py-2 rounded-full font-medium items-center justify-center">Login</a>
          </div>
        )}
    </nav>
  )
}

export default Navbar