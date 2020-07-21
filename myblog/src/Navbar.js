import React from 'react';
import {Link} from 'react-router-dom'
import {Header } from 'grommet';
import {Github,Linkedin, Twitter} from 'grommet-icons'
import './App.css'
const Navbar = () => (

    <nav>
        <Header background="brand">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles-list">Articles</Link>

                </li>

            </ul>
            <ul className="social">
                <li>
                <Github size="large"/>
                </li>
                <li>
                <Linkedin size="large"/>
                </li>
                <li>
                <Twitter size="large"/>
                </li>
            </ul>
        </Header>

    </nav>
)

export default Navbar;