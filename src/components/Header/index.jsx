import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./styles";

import ImgContainer from "../ImgContainer";

import SkullLogo from '../../assets/img/skull.png'
import MenuIcon from '../../assets/img/icon/menuIcon.png'


export default function HeaderComp() {

    return (

        <Header>

            <nav>

                <div>
                    <div id="headerLogo">

                        <Link to='/home'>
                            <ImgContainer src={SkullLogo} alt={'Icon'} style={{ width: '32px' }} />
                            <p>Comp Lib</p>
                        </Link>

                    </div>

                    <ImgContainer src={MenuIcon} alt={'Menu Icon'} style={{width: '30px'}}/>
                </div>

                {/* <span className="break"></span> */}

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

        </Header>
    )
}