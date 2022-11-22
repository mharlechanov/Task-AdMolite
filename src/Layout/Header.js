import React from "react"
import Joystick from "../Assets/joystick.png"
console.log(Joystick);

export default function Header() {
    return (
        <header className="App-header">
            <img src={Joystick}/>
            <nav>
            <ul>
            <li><a href="http://localhost:3000/home">Home</a></li>
            <li><a href="http://localhost:3000/about">About</a></li>
            <li><a href="http://localhost:3000/contact">Contact</a></li>
            <li><a href="http://localhost:3000/custom">Custom</a></li>
            </ul>
            </nav>
        </header>
    )
}