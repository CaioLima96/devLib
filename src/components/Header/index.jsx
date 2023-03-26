import React from "react";
import { Link } from "react-router-dom";


import SkullLogo from '../../assets/img/skull.png'
import ImgContainer from "../ImgContainer";


export default function HeaderComp() {

    return (

        <header>

            <nav>

                <div>
                    <div id="headerLogo">

                        <Link to='/home'>
                            <ImgContainer src={SkullLogo} alt={'Icon'} style={{ width: '40px' }} />
                            <p>Comp Lib</p>
                        </Link>

                    </div>

                    {/* <div className='imgContainer' onclick="myNavBar()">
                            <img src={Hamburger} alt='menuIcon'/>
                        </div> */}
                </div>

                <span className="break"></span>

                <ul id="headerNavMenu">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/components'>Components</Link></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contactUs">Contact Us</a></li>
                    {/* <li id="darkModeBtn" >
                        onclick="darkModeFunc()"
                        <p>Dark Mode</p>

                        <div>

                                <div id='dmMoon' className="imgContainer"><img src='./assets/img/icons/moon1.png' alt='moon'></div>
                                <div id='dmSun' className="imgContainer"><img src='./assets/img/icons/sun1.png' alt='sun'></div>

                            </div>
                    </li> */}
                </ul>
            </nav>

        </header>
    )
}