import React from 'react';

function Navigation() {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap  bg-green-600 p-6">
            <div className="text-center">
                Navbar
            </div>
        </nav>
    )
} export default Navigation;