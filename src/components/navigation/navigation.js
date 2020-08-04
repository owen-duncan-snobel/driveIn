import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ComingSoon from '../../routes/comingsoon/comingsoon';
import NowPlaying from '../../routes/nowplaying/nowplaying';

function Navigation() {

    /*     const [navbarOpen, setNavbarOpen] = React.useState(false);
    
        const [activePage, setActivePage] = React.useState(false);
    
        const toggleClass = () => {
        } */

    return (
        <Router>

            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0  mr-6">
                    <Link to="/">
                        <span className="font-bold text-4xl tracking-tight bg-indigo-400 p-3">5 Drive in</span>
                    </Link>
                </div>

                <div className="w-full block flex-grow md:flex sm:w-auto ">
                    <div className="text-sm font-semibold hidden md:block">
                        <Link to="/nowplaying" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-gray-900"  >
                            Now Playing
                    </Link>
                        <Link to="/comingsoon" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4  text-gray-500"  >
                            Coming Soon
                    </Link>
                        <Link to="/buytickets" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-gray-500"  >
                            Buy Tickets
                    </Link>
                        <Link to="/food" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-gray-500"  >
                            Food
                    </Link>
                        <Link to="/theatreinfo" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-gray-500"  >
                            Theatre Info
                    </Link>
                        <Link to="/prices" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-gray-500"  >
                            Prices
                    </Link>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route path="/comingsoon">
                    <ComingSoon />
                </Route>
                <Route path="/nowplaying">
                    <NowPlaying />
                </Route>
                <Route path="/">
                    <NowPlaying />
                </Route>
            </Switch>
        </Router>
    )
} export default Navigation;