import React, { useState } from "react"
import { Link } from "gatsby"
const Layout = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div>
      <nav>
        {/** Medium breakpoint and up Menu Bar */}
        <div className="flex items-center justify-between md:justify-start">
          <div className="p-6">
            <Link to="/">
              <span className="font-bold text-4xl tracking-tight bg-indigo-400 p-3">
                Drive in
              </span>
            </Link>
          </div>

          <div className="md:hidden m-6">
            <button onClick={() => setNavbarOpen(!navbarOpen)}>
              <svg
                className="stroke-current text-gray-900 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="text-sm font-semibold hidden md:block justify-center">
            <Link
              to="/nowplaying"
              className="block  sm:inline-block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900"
              activeClassName="text-gray-900"
            >
              Now Playing
            </Link>

            <Link
              to="/comingsoon"
              className="block  sm:inline-block lg:mt-0 mr-4  text-gray-500 hover:text-gray-900"
              activeClassName="text-gray-900"
            >
              Coming Soon
            </Link>

            <Link
              to="/underconstruction"
              className="block  sm:inline-block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900"
              activeClassName="text-gray-900"
            >
              Buy Tickets
            </Link>

            <Link
              to="/underconstruction"
              className="block  sm:inline-block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900"
              activeClassName="text-gray-900"
            >
              Food
            </Link>

            <Link
              to="/theatreinfo"
              className="block  sm:inline-block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900"
              activeClassName="text-gray-900"
            >
              Theatre Info
            </Link>

            <Link
              to="/prices"
              className="block  sm:inline-block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900 "
              activeClassName="text-gray-900"
            >
              Prices
            </Link>
          </div>
        </div>

        {/** MOBILE MENU BAR */}
        <div
          className={
            "text-sm  font-semibold justify md:hidden pl-5 " +
            (navbarOpen ? "block" : "hidden")
          }
        >
          <Link
            to="/nowplaying"
            className="block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900"
            activeClassName="text-gray-900"
          >
            Now Playing
          </Link>

          <Link
            to="/comingsoon"
            className="block  lg:mt-0 mr-4  text-gray-500 hover:text-gray-900"
            activeClassName="text-gray-900"
          >
            Coming Soon
          </Link>

          <Link
            to="/underconstruction"
            className="block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900"
            activeClassName="text-gray-900"
          >
            Buy Tickets
          </Link>

          <Link
            to="/underconstruction"
            className="block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900"
            activeClassName="text-gray-900"
          >
            Food
          </Link>

          <Link
            to="/theatreinfo"
            className="block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900"
            activeClassName="text-gray-900"
          >
            Theatre Info
          </Link>

          <Link
            to="/prices"
            className="block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900 "
            activeClassName="text-gray-900"
          >
            Prices
          </Link>
        </div>
      </nav>
      {children}
    </div>
  )
}
export default Layout
