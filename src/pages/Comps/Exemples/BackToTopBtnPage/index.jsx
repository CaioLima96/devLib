import React, { useRef } from "react";
import { TabPanel } from '@chakra-ui/react'
import MainComp from "../../../../components/MainComp";
import CodeContainer from "../../../../components/CodeContainer";
import CodeTabs from "../../../../components/CodeTabs";
import CopyButton from "../../../../components/CopyButton";

import { GlobalStyle } from './styles'

export default function BackToTopBtnPage() {

    let copyHtmlRef = useRef()
    let copyCssRef = useRef()
    let copyJsRef = useRef()
    let copyFontAweRef = useRef()

    return (

        <>
            <GlobalStyle />
            {/* style={{backgroundColor: '#D9D9D9'}} */}
            <MainComp to={'/components'}>

                <CodeContainer title={'Back to Top Button'} id="codeContainer">

                    <p>To use this component arrow-up icon, you will need Font Awesome cdn, just copy it and paste in your &lt;head&gt;.</p>
                  
                    <div style={{
                        display: 'flex',
                        // flexDirection: 'column',
                        justifyContent: 'space-between', 
                        backgroundColor:'#1E1E1E',
                        margin: '10px 0 67px',
                        borderRadius: '5px'
                    }}>

                        {/* <CopyButton copyRef={copyFontAweRef}/> */}

<pre ref={copyFontAweRef}>{
` <!-- Font Awesome icons (free version)-->
<script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" crossorigin="anonymous"></script>`
}</pre>
                    
                        <CopyButton copyRef={copyFontAweRef} alignSelf={'self-start'} style={{ marginLeft: '0.625rem' }}/>

                    </div>

                    <CodeTabs>
                        
                        {/* HTML */}
                        <TabPanel>

                            <CopyButton  copyRef={copyHtmlRef}/>

<pre ref={copyHtmlRef}>{
`<div onclick="topFunction()" id="backToTopButton" title="Back to top">

    <div>

        <i class="fas fa-arrow-up"></i>

    </div>

</div>`
}</pre>

                        </TabPanel>
                        
                        {/* CSS */}
                        <TabPanel>

                            <CopyButton  copyRef={copyCssRef}/>

<pre ref={copyCssRef}>{
`/*============ BACK TO TOP BTN ============*/

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
}

#backToTopButton:hover {
    background-color: black;
    color: white;
    box-shadow: none;
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
`//=========== BACK TO THE TOP BTN

//Get the button
let mybutton = document.getElementById("backToTopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {

	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
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