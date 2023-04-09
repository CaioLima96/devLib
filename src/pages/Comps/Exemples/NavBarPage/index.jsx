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
`<nav className="navMenu">

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

</nav>`
}</pre>

                        </TabPanel>

                        {/* CSS */}
                        <TabPanel>

                            <CopyButton copyRef={copyCssRef} />

<pre ref={copyCssRef}>{
`
`
}</pre>

                        </TabPanel>

                        {/* JS */}
                        <TabPanel>

                            <CopyButton copyRef={copyJsRef} />

<pre ref={copyJsRef}>{
`
`
}</pre>

                        </TabPanel>

                    </CodeTabs>

                </CodeContainer>

            </MainComp>
        
        </>
    )
}