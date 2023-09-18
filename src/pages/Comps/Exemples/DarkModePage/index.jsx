import React, {useRef}   from "react";
import { TabPanel } from '@chakra-ui/react'

import MainComp from "../../../../components/MainComp";
import CodeContainer from "../../../../components/CodeContainer";
import CodeTabs from "../../../../components/CodeTabs";
import CopyButton from "../../../../components/CopyButton";
import ImgContainer from "../../../../components/ImgContainer";

import { GlobalStyle } from './styles'
import Sun from '../../../../assets/img/icon/sun.png'
import Moon from '../../../../assets/img/icon/moon.png'


export default function DarkModePage() {

    let copyHtmlRef = useRef()
    let copyCssRef = useRef()
    let copyJsRef = useRef()
    let sunMonRef = useRef()

    const toggleSunMoon = () => {
        sunMonRef.current.classList.toggle('toggleSunMoon')
    }

    return (

        <>
            <GlobalStyle/>

            <MainComp to={'/components'}>

                <CodeContainer title={'Dark Mode'}>

                    <div className='darkModeBtn2' onClick={toggleSunMoon}>
                        <p>Dark Mode</p>

                        <div ref={sunMonRef}>

                            <div className="dmMoon" ><ImgContainer src={Moon} alt='moon'/></div>
                            <div className="dmSun"><ImgContainer src={Sun} alt='sun'/></div>

                        </div>
                    </div>

                    <CodeTabs>

                        {/* HTML */}
                        <TabPanel>

                            <CopyButton copyRef={copyHtmlRef} />

<pre ref={copyHtmlRef}>{
`<li class='darkModeBtn'>
    <p>Dark Mode</p>

    <div>

        <div class="dmMoon imgContainer"><img src='./assets/img/icon/moon1.png' alt='moon'></div>
        <div class="dmSun imgContainer"><img src='./assets/img/icon/sun1.png' alt='sun'></div>

    </div>
</li>`
}</pre>

                        </TabPanel>

                        {/* CSS */}
                        <TabPanel>

                            <CopyButton copyRef={copyCssRef} />

<pre ref={copyCssRef}>{
`/*======================== DARK MODE BTN ========================*/

.darkModeBtn {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 1rem;
}

.darkModeBtn p {
    margin-right: 5px;
    pointer-events: none;
}

.darkModeBtn div:nth-child(2){
    position: relative;
    transform-style: preserve-3d;
    transition: all 2s cubic-bezier(0.175, 0.885,0.32,1.265);
    height: 20px;
    width: 20px;
}

.darkModeBtn .imgContainer {
    width: 20px;
    height: 20px;
}

.dmMoon, .dmSun {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
}

.dmMoon {
    display: inline-block;
}

.dmSun {
    display: inline-block;
    transform: rotateY(-180deg);
    -webkit-backface-visibility: hidden; 
    backface-visibility: hidden;
}

.toggleSunMoon {
    transform: rotateY(180deg);
}

.darkMode {
    background-color: #202020;
}`
}</pre>

                        </TabPanel>

                        {/* JS */}
                        <TabPanel>

                            <CopyButton copyRef={copyJsRef} />

<pre ref={copyJsRef}>{
`//======================== DARK MODE BTN ========================

let darkModeBtn = document.getElementsByClassName('darkModeBtn')[0]
let dmBtnText = darkModeBtn.getElementsByTagName('p')[0]

function darkModeFunc() {

	let element = document.body;
	element.classList.toggle("darkMode");
	darkModeBtn.getElementsByTagName('div')[0].classList.toggle('toggleSunMoon')

	if (dmBtnText.textContent == 'Dark Mode') {

		return dmBtnText.textContent = 'Light Mode'

	} else {

		return dmBtnText.textContent = 'Dark Mode'

	}
}
darkModeBtn.addEventListener('click', darkModeFunc)`
}</pre>

                        </TabPanel>

                    </CodeTabs>

                    <p style={{margin: '4.375rem 0 2.5rem'}}>I usually use this btn inside &lt;ul&gt; in the navbar, if you want to use it somewhere else, copy the Html and Css given below.</p>

                    <CodeTabs tabs={['Html','Css']}>

                        {/* HTML */}
                        <TabPanel>

                            <CopyButton copyRef={copyHtmlRef} />

<pre ref={copyHtmlRef}>{
`<div class='darkModeBtn'>
    <p>Dark Mode</p>

    <div>

        <div class="dmMoon imgContainer"><img src='./assets/img/icon/moon1.png' alt='moon'></div>
        <div class="dmSun imgContainer"><img src='./assets/img/icon/sun1.png' alt='sun'></div>

    </div>
</div>`
}</pre>

                        </TabPanel>

                        {/* CSS */}
                        <TabPanel>

                            <CopyButton copyRef={copyCssRef} />

<pre ref={copyCssRef}>{
`/*======================== DARK MODE BTN ========================*/

.darkModeBtn {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 1rem;

    width: 149px;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
}

.darkModeBtn:hover {
    background-color: black;
}

.darkModeBtn:hover p {
    color: #96B060;
}

.darkModeBtn p {
    margin-right: 5px;
    pointer-events: none;
}

.darkModeBtn div:nth-child(2){
    position: relative;
    transform-style: preserve-3d;
    transition: all 2s cubic-bezier(0.175, 0.885,0.32,1.265);
    height: 20px;
    width: 20px;
}

.darkModeBtn .imgContainer {
    width: 20px;
    height: 20px;
}

.dmMoon, .dmSun {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
}

.dmMoon {
    display: inline-block;
}

.dmSun {
    display: inline-block;
    transform: rotateY(-180deg);
    -webkit-backface-visibility: hidden; 
    backface-visibility: hidden;
}

.toggleSunMoon {
    transform: rotateY(180deg);
}

.darkMode {
    background-color: #202020;
}`
}</pre>

                        </TabPanel>

                    </CodeTabs>

                </CodeContainer>

            </MainComp>
        </>
    )
}