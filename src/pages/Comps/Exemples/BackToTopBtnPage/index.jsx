import React, { useRef } from "react";
import { TabPanel } from '@chakra-ui/react'

import MainComp from "../../../../components/MainComp";
import CodeContainer from "../../../../components/CodeContainer";
import CodeTabs from "../../../../components/CodeTabs";
import CopyButton from "../../../../components/CopyButton";


export default function BackToTopBtnPage() {

    let copyHtmlRef = useRef()
    let copyCssRef = useRef()
    let copyJsRef = useRef()

    return (

        <>
            <MainComp to={'/components'}>

                <CodeContainer title={'Back to Top Button'} id="codeContainer">

                    <CodeTabs>
                        
                        {/* HTML */}
                        <TabPanel>

                            <CopyButton  copyRef={copyHtmlRef}/>

<pre ref={copyHtmlRef}>{
`<div onclick="topFunction()" id="backToTopButton" title="Back to top">

    <div class="imgContainer">

        <img src="YOUR IMG HERE" alt="">

    </div>

</div>`
}</pre>

                        </TabPanel>
                        
                        {/* CSS */}
                        <TabPanel>

                            <CopyButton  copyRef={copyCssRef}/>

<pre ref={copyCssRef}>{
`/*======================== BACK TO TOP BTN ========================*/

#backToTopButton {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 24px;

    font-size: 18px;
    border: none;
    outline: none;
    cursor: pointer;

    padding: 10px 12px;
    border-radius: 50%;
    background-color: white;
    color: black;
    box-shadow: 0px 0px 7px -3px ;
    transition: .5s ease;
    border: 1px solid #c0c0c0;
}

#backToTopButton:hover, #backToTopButton:active {
    background-color: black;
    color: white;
    border-color: black;
}

#backToTopButton:hover div {
    filter: brightness(0) invert(1);
}

@media (max-width: 850px) {

    #backToTopButton {
        bottom: 9px;
        right: 10px;
    }
}`
}</pre>

                        </TabPanel>
                         
                        {/* JS */}
                        <TabPanel>

                            <CopyButton  copyRef={copyJsRef}/>

<pre ref={copyJsRef}>{
`//======================== BACK TO TOP BTN ========================

//Get the button
let backTopBtn = document.getElementById("backToTopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {

	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		backTopBtn.style.display = "block";
	} else {
		backTopBtn.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}`
}</pre>

                        </TabPanel>

                    </CodeTabs>

                </CodeContainer>
                
            </MainComp>
        </>
    )
}