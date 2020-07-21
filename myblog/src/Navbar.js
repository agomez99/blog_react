import React from 'react';
import {Link} from 'react-router-dom'
import {Header } from 'grommet';
import {Github,Linkedin, Twitter} from 'grommet-icons'
import { Button } from 'grommet';

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
                <Button default  href="https://www.linkedin.com/in/austine-gomez/" ><Linkedin size="large"/></Button>
                </li>
                <li>
                <Button default  href="https://github.com/agomez99" ><Github size="large"/></Button>
                </li>
                <li>
                <Button default  href="https://twitter.com/home" ><Twitter size="large"/></Button>
                </li>
            </ul>
        </Header>

    </nav>
)

export default Navbar;