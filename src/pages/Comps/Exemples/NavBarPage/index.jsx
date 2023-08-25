import React, { useRef } from "react";
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

    function openNavBar() {

        let navMenu = document.getElementsByClassName("navMenuList")[0]
        navMenu.classList.toggle('hideShowNavMenu')
    }

    return(
        <>

            <GlobalStyle/>
        
            <MainComp to={'/components'}>

                <CodeContainer title={'NavBar'} id="navBarContainer">

                    <nav className="navMenu">
                        
                        <div>
                            <div className="navMenuLogo">

                                <a href="">
                                    <ImgContainer src={SkullLogo} alt={'Icon'} style={{ width: '32px' }} />
                                    <p>Comp Lib</p>
                                </a>

                            </div>

                            <ImgContainer src={MenuIcon} alt={'Menu Icon'} style={{width: '30px'}} onClick={openNavBar}/>
                        </div>

                        <ul className="navMenuList">
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact Us</a></li>
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

        <div class='imgContainer'>
            <img src="assets/img/icon/menuIcon.png" alt="Menu Icon" style="width: 30px;" onclick="openNavBar()">
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
`/*============ NAVBAR ============*/

.navMenu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.125rem;
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

.navMenu .navMenuList {
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
    text-transform: uppercase;
}

.navMenu li {
    font-weight: bold;
}

.navMenu .navMenuList a {
    padding: 1rem;
    display: inline-block;
}

.navMenu li:hover {
    cursor: pointer;
    background-color: black;
}

.navMenu li:hover a, .navMenu li:hover p{
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
`//====================== RESPONSIVE MENU

function openNavBar() {
    
    let headerNavMenu = document.getElementsByClassName("navMenuList")[0]
    headerNavMenu.classList.toggle('hideShowNavMenu')
}

function closeNavBar() {

    let headerNavMenu = document.getElementsByClassName("navMenuList")[0]
    headerNavMenu.classList.remove('hideShowNavMenu')
}`
}</pre>

                        </TabPanel>

                    </CodeTabs>

                </CodeContainer>

            </MainComp>
        
        </>
    )
}