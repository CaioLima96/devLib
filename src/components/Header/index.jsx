import React from "react";

import SkullLogo from '../../assets/img/skull.png'


export default function HeaderComp() {

    return (

        <header>

            <nav>

                <div>
                    <div id="headerLogo">
                        <a href="./index.html">
                            <div className='imgContainer'><img src={SkullLogo} alt="Icon" style={{width:'40px'}}/></div>
                            <p>Comp Lib</p>
                        </a>
                    </div>

                    {/* <div className='imgContainer' onclick="myNavBar()">
                            <img src={SkullLogo} alt='menuIcon'/>
                        </div> */}
                </div>

                <span className="break"></span>

                <ul id="headerNavMenu">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contactUs">Contact Us</a></li>
                    <li id="darkModeBtn" >
                        {/* onclick="darkModeFunc()" */}
                        <p>Dark Mode</p>

                        {/* <div>

                                <div id='dmMoon' className="imgContainer"><img src='./assets/img/icons/moon1.png' alt='moon'></div>
                                <div id='dmSun' className="imgContainer"><img src='./assets/img/icons/sun1.png' alt='sun'></div>

                            </div> */}
                    </li>
                </ul>
            </nav>

        </header>
    )
}