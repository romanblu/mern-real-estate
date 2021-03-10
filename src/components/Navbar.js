import React from 'react'
import {Link} from 'react-router-dom';
import {useState} from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import './Navbar.css'


export default function Navbar() {
    // const {activeItem, setActiveItem} = useState('home');
    
    // const handleItemClick = (e, { name }) => setActiveItem( name );

    return (
        <div>
            <nav className="navbar">
                {/* <Menu pointing secondary >
                    
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='messages'
                            active={activeItem === 'messages'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='friends'
                            active={activeItem === 'friends'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={handleItemClick} />
                    </Menu.Menu>
                </Menu> */}

                <div className="navbar-container">
                    <Link to='/' className="logo-icon">REAL ESTATE HOME</Link>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link className="nav-links">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-links">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-links">Contact us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-links">Listings</Link>
                        </li>
                    </ul>
                
                </div>
            </nav>
        </div>
    )
}
