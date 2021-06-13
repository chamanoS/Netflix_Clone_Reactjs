import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <div className="nav">
            <img className="nav_logo"
                 src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
                 alt="Netflix Logo"
            />
            <img className="nav_avatar"
                 src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                 alt="Netflix avatar"
            />
        </div>
    )
}

export default Nav
