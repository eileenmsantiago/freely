import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faBell } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)
library.add(faBell)
library.add(faUser)

const Nav = (props) => {
    return(
        <nav className="nav">
            <div className="nav-logo">
                <a href="index.html"><img src="/assets/Logo.svg" alt="Freely logo"/></a>
            </div>
            <ul className="nav-list">
                <li><a className="nav__text-link" href="index.html">Dashboard</a></li>
                <li><a className="nav__text-link" href="index.html">Goals</a></li>
            </ul>
            <ul className="nav-list nav-list--icons col-md">
                <li><a href="index.html"><FontAwesomeIcon icon="search" size="lg"/></a></li>
                <li><a href="index.html"><FontAwesomeIcon icon="bell" size="lg"/></a></li>
                <li><a href="index.html"><FontAwesomeIcon icon="user" size="lg"/></a></li>
            </ul>
            {/* <div className="nav-list--ham">
                <label for="toggle" onclick="showHam()">&#9776;</label>
                <ul className="nav-list--ham-list">
                    <li><a className="nav__text-link" href="index.html">Dashboard</a></li>
                    <li><a className="nav__text-link" href="index.html">Goals</a></li>
                    <li><a className="nav__text-link" href="index.html">Notifications</a></li>
                    <li><a className="nav__text-link" href="index.html">Profile</a></li>
                </ul>
            </div> */}
        </nav>
    )
}

export default Nav;