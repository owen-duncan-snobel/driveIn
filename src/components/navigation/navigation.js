import React from 'react';

function Navigation() {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const [activePage, setActivePage] = React.useState(false);

    const toggleClass = () => {
    }
    return (
        <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0  mr-6">
                <a href="/">
                    <span className="font-bold text-4xl tracking-tight bg-indigo-400 p-3">5 Drive in</span>
                </a>
            </div>

            <div className="w-full block flex-grow md:flex sm:w-auto ">
                <div className="text-sm font-semibold hidden md:block">
                    <a href="/nowplaying" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-gray-900"  >
                        Now Playing
                    </a>
                    <a href="/comingsoon" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4  text-gray-500"  >
                        Coming Soon
                    </a>
                    <a href="/buytickets" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-gray-500"  >
                        Buy Tickets
                    </a>
                    <a href="/food" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-gray-500"  >
                        Food
                    </a>
                    <a href="/theatreinfo" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-gray-500"  >
                        Theatre Info
                    </a>
                    <a href="/prices" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-gray-500"  >
                        Prices
                    </a>
                </div>
            </div>
        </nav>
    )
} export default Navigation;