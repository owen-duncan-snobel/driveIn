import React from 'react';

function Navigation() {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0  mr-6">
                <a href="#">
                    <span className="font-bold text-4xl tracking-tight bg-indigo-400 p-3">5 Drive in</span>
                </a>
            </div>

            <div className="w-full block flex-grow md:flex sm:w-auto ">
                <div className="text-sm hidden md:block">
                    <a href="#" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-grey-100" >
                        Now Playing
                    </a>
                    <a href="#" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-grey-100" >
                        Coming Soon
                    </a>
                    <a href="#" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-grey-100" >
                        Buy Tickets
                    </a>
                    <a href="#" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-grey-100" >
                        Food
                    </a>
                    <a href="#" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-grey-100" >
                        Theatre Info
                    </a>
                    <a href="#" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-grey-100" >
                        Prices
                    </a>
                </div>
            </div>
        </nav>
    )
} export default Navigation;