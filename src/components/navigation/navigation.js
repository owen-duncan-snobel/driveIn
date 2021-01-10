import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import ComingSoon from '../../routes/comingsoon/comingsoon';
import NowPlaying from '../../routes/nowplaying/nowplaying';
import UnderConstruction from '../../routes/underconstruction/underconstruction.js';
import Prices from '../../routes/prices/prices';

function Navigation() {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <Router>
            <nav>
                {/** Medium breakpoint and up Menu Bar */}
                <div className="flex items-center justify-between md:justify-start">
                    <div className="p-6">
                        <NavLink exact to="/">
                            <span className="font-bold text-4xl tracking-tight bg-indigo-400 p-3">Drive in</span>
                        </NavLink>
                    </div>

                    <div className="md:hidden m-6">
                        <button onClick={() => setNavbarOpen(!navbarOpen)}>
                            <svg className="stroke-current text-gray-900 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6">
                                </line><line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    <div className="text-sm font-semibold hidden md:block justify-center">
                        <NavLink exact to="/nowplaying" className="block  sm:inline-block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900" activeClassName="text-gray-900" >
                            Now Playing
                        </NavLink>

                        <NavLink exact to="/comingsoon" className="block  sm:inline-block lg:mt-0 mr-4  text-gray-500 hover:text-gray-900" activeClassName="text-gray-900" >
                            Coming Soon
                        </NavLink>

                        <NavLink exact to="/buytickets" className="block  sm:inline-block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900" activeClassName="text-gray-900" >
                            Buy Tickets
                        </NavLink>

                        <NavLink exact to="/food" className="block  sm:inline-block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900" activeClassName="text-gray-900" >
                            Food
                        </NavLink>

                        <NavLink exact to="/theatreinfo" className="block  sm:inline-block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900" activeClassName="text-gray-900" >
                            Theatre Info
                        </NavLink>

                        <NavLink exact to="/prices" className="block  sm:inline-block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900 " activeClassName="text-gray-900" >
                            Prices
                        </NavLink>
                    </div>

                </div>

                {/** MOBILE MENU BAR */}
                <div className={"text-sm  font-semibold justify md:hidden pl-5 " + (navbarOpen ? 'block' : 'hidden')}>
                    <NavLink exact to="/nowplaying" className="block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900" activeClassName="text-gray-900" >
                        Now Playing
                    </NavLink>

                    <NavLink exact to="/comingsoon" className="block  lg:mt-0 mr-4  text-gray-500 hover:text-gray-900" activeClassName="text-gray-900" >
                        Coming Soon
                    </NavLink>

                    <NavLink exact to="/buytickets" className="block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900" activeClassName="text-gray-900" >
                        Buy Tickets
                    </NavLink>

                    <NavLink exact to="/food" className="block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900" activeClassName="text-gray-900" >
                        Food
                    </NavLink>

                    <NavLink exact to="/theatreinfo" className="block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900" activeClassName="text-gray-900" >
                        Theatre Info
                    </NavLink>

                    <NavLink exact to="/prices" className="block lg:mt-0 mr-4 text-gray-500 hover:text-gray-900 " activeClassName="text-gray-900" >
                        Prices
                    </NavLink>
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
                    <Prices />
                </Route>
                <Route path="/">
                    <NowPlaying />
                </Route>
            </Switch>
        </Router>
    )
} export default Navigation;
