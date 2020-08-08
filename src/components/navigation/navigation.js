import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import ComingSoon from '../../routes/comingsoon/comingsoon';
import NowPlaying from '../../routes/nowplaying/nowplaying';
import UnderConstruction from '../../routes/underconstruction/underconstruction.js';

function Navigation() {

    /*     const [navbarOpen, setNavbarOpen] = React.useState(false);
    
        const [activePage, setActivePage] = React.useState(false);
    
        const toggleClass = () => {
        } */

    return (
        <Router>

            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0  mr-6">
                    <NavLink exact to="/">
                        <span className="font-bold text-4xl tracking-tight bg-indigo-400 p-3">Drive in</span>
                    </NavLink>
                </div>

                <div className="w-full block flex-grow md:flex sm:w-auto ">
                    <div className="text-sm font-semibold hidden md:block">
                        <NavLink exact to="/nowplaying" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-gray-500" activeClassName="text-gray-900" >
                            Now Playing
                    </NavLink>
                        <NavLink exact to="/comingsoon" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4  text-gray-500" activeClassName="text-gray-900" >
                            Coming Soon
                    </NavLink>
                        <NavLink exact to="/buytickets" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-gray-500" activeClassName="text-gray-900" >
                            Buy Tickets
                    </NavLink>
                        <NavLink exact to="/food" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-gray-500" activeClassName="text-gray-900" >
                            Food
                    </NavLink>
                        <NavLink exact to="/theatreinfo" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-gray-500" activeClassName="text-gray-900" >
                            Theatre Info
                    </NavLink>
                        <NavLink exact to="/prices" className="block mt-4 sm:inline-block lg:mt-0  hover: mr-4 text-gray-500" activeClassName="text-gray-900" >
                            Prices
                    </NavLink>
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
                <Route path="/buytickets">
                    <UnderConstruction />
                </Route>
                <Route path="/food">
                    <UnderConstruction />
                </Route>
                <Route path="/theatreinfo">
                    <UnderConstruction />
                </Route>
                <Route path="/prices">
                    <UnderConstruction />
                </Route>
                <Route path="/">
                    <NowPlaying />
                </Route>
            </Switch>
        </Router>
    )
} export default Navigation;