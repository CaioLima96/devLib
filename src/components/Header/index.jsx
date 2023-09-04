import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, GlobalStyle } from "./styles";

import ImgContainer from "../ImgContainer";
import DarkModeBtn from "../DarkModeBtn";

import SkullLogo from '../../assets/img/skull.png'
import MenuIcon from '../../assets/img/icon/menuIcon.png'


export default function HeaderComp(props) {

    let menuBtnRef = useRef(null)
    let menuRef = useRef(null)

    const toggleMenu = () => {
        menuRef.current.classList.toggle("hideShowNavMenu")
    }

    useEffect(() => {
        const handleClick = event => {
         
            if(event.target.classList[1] != "hideShowNavMenu" && event.target.classList[0] != 'menuBtn') {
                menuRef.current.classList.remove("hideShowNavMenu")
            }
        };
    
        window.addEventListener('click', handleClick);
    
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (

        <>
            <GlobalStyle/>

            <Header>

                <nav className="navMenu">

                    <div>
                        <div className="navMenuLogo">

                            <Link to='/home'>
                                <ImgContainer src={SkullLogo} alt={'Logo'} style={{ width: '32px' }} />
                                <p>Dev Lib</p>
                            </Link>

                        </div>

                        <div className="imgContainer" ref={menuBtnRef} style={{ width: '30px' }} 
                        onClick={toggleMenu}
                        >
                            <img src={MenuIcon} className="menuBtn" />
                        </div>

                    </div>

                    <ul className="navMenuList" ref={menuRef}>
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
                        {/* <DarkModeBtn/> */}
                    </ul>

                </nav>
                
            </Header>
        </>
    )
}