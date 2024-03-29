import React, { useRef, useEffect } from "react";
import { TabPanel } from '@chakra-ui/react'

import MainComp from "../../../../components/MainComp";
import CodeContainer from "../../../../components/CodeContainer";
import CodeTabs from "../../../../components/CodeTabs";
import CopyButton from "../../../../components/CopyButton";
import ImgContainer from "../../../../components/ImgContainer";

import { GlobalStyle } from './styles'

import SkullLogo from '../../../../assets/img/skull.png'
import MenuIcon from '../../../../assets/img/icon/menuIcon.png'

export default function NavBarPage() {

    let copyHtmlRef = useRef()
    let copyCssRef = useRef()
    let copyJsRef = useRef()
    let menuBtnRef2 = useRef(null)
    let menuRef2 = useRef(null)

    const toggleMenu = () => {
        menuRef2.current.classList.toggle("hideShowNavMenu")
    }

    useEffect(() => {
        const handleClick = event => {
         
            if(event.target.classList[1] !== "hideShowNavMenu" && event.target.classList[0] !== 'menuBtn2') {
                menuRef2.current.classList.remove("hideShowNavMenu")
            }
        };
    
        window.addEventListener('click', handleClick);
    
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return(
        <>

            <GlobalStyle/>
        
            <MainComp to={'/components'}>

                <CodeContainer title={'NavBar'} id="navBarContainer">

                    <nav className="navMenu2">
                        
                        <div>
                            <div className="navMenuLogo">

                                <a href="#">
                                    <ImgContainer src={SkullLogo} alt={'Icon'} style={{ width: '32px' }} />
                                    <p>Dev Lib</p>
                                </a>

                            </div>

                            <div className="imgContainer" ref={menuBtnRef2} style={{width: '30px'}} onClick={toggleMenu}>
                                <img src={MenuIcon} className="menuBtn2" alt=""/>
                            </div>
                            
                        </div>

                        <ul className="navMenuList" ref={menuRef2}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>

                    </nav>

                    <CodeTabs>

                        {/* HTML */}
                        <TabPanel>

                            <CopyButton copyRef={copyHtmlRef} />

<pre ref={copyHtmlRef}>{
`<nav class="navMenu">

    <div>
        <div class="navMenuLogo">

            <a href="">
                <div class='imgContainer'><img src="YOURLOGOHERE" alt="Logo" style="width: 32px;"></div>
                <p>Dev Lib</p>
            </a>

        </div>

        <div class='imgContainer navMenuBtn'>
            <img src="assets/img/icon/menuIcon.png" alt="Menu Icon" style="width: 30px;">
        </div>
    </div>

    <ul class="navMenuList">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact Us</a></li>
    </ul>

</nav>`
}</pre>

                        </TabPanel>

                        {/* CSS */}
                        <TabPanel>

                            <CopyButton copyRef={copyCssRef} />

<pre ref={copyCssRef}>{
`/* ========================= NAVBAR ========================= */

.navMenu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.125rem;
    background-color: rgb(150, 176, 96);
}

.navMenu > div:first-child {
    margin-left: 0.625rem;
}

.navMenu > div:first-child .navMenuLogo a {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1.563rem;
    color: black;
}

.navMenu > div:first-child .navMenuLogo a div {
    margin-right: 0.438rem
}

.navMenu > div:first-child .navMenuLogo a p:hover {
    font-style: italic;
}


.navMenu > div:first-child > div:last-child {
    display: none;
}

.navMenuList {
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
    text-transform: uppercase;
}

.navMenuList li {
    font-weight: bold;
}

.navMenuList a {
    padding: 1rem;
    display: inline-block;
    color: black;
}

.navMenuList li:hover {
    cursor: pointer;
    background-color: black;
}

.navMenuList li:hover a, .navMenuList li:hover p{
    color: #96b060;
}

@media (max-width: 600px) {

    .navMenu {
        position: relative;
    }

    .navMenu > div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0.625rem;
        margin-left: 0;
    }

    .navMenu > div:first-child > div:last-child {
        display: block;
    }

    .navMenuList {
        display: none;
        width: 100%;
        padding: 0.625rem 0;
        background-color: #333333 !important;
        position: absolute;
        top: 98%;
        z-index: 3;
    }
        
    .navMenuList a {
        color: white;
        width: 100%;
    }
    
    .navMenuList p { /*this is for dark mode button*/
        color: white;
    }
    
    .hideShowNavMenu {
        display: block !important;
    }
}`
}</pre>

                        </TabPanel>

                        {/* JS */}
                        <TabPanel>

                            <CopyButton copyRef={copyJsRef} />

<pre ref={copyJsRef}>{
`// ========================= NAVBAR =========================

let menuBtn = document.getElementsByClassName('navMenuBtn')[0]
let menu = document.getElementsByClassName('navMenuList')[0]

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hideShowNavMenu')
})

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
      menu.classList.remove('hideShowNavMenu')
    }
});`
}</pre>

                        </TabPanel>

                    </CodeTabs>

                </CodeContainer>

            </MainComp>
        
        </>
    )
}