import React from 'react';
import {Avatar} from 'grommet'
import image from './me.jpg'
const AboutPage = () =>(

    <>
        <h1>About Me</h1>
        <Avatar src={image} /> 
        <p>Welcome to my blog by Austine Gomez, I am new junior full stack devloper, with an emphasis more on the front-end. I have a CS 
        degree and love to write code. I enjoy learning new technologies and the challeneges it brings  </p>
     
    </>
)

export default AboutPage;