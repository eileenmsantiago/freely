import React from 'react';

const Nav = (props) => {
    return(
        <nav className="nav">
            <ul className="nav-list">
                <li><a className="nav__text-link" href="index.html">Dashboard</a></li>
                <li><a className="nav__text-link" href="index.html">Goals</a></li>
            </ul>
            <ul className="nav-list nav-list--icons">
                <li><a href="#"><img src="/assets/icon-search.svg" alt="search icon"/></a></li>
                <li><a href="#"><img src="/assets/icon-notif.svg" alt="notification icon"/></a></li>
                <li><a href="#"><img src="/assets/icon-profile.svg" alt="profile icon"/></a></li>
            </ul>
        </nav>
    )
}

export default Nav;