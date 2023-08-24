import React, { useRef }  from "react";
import { TabPanel } from '@chakra-ui/react'

import MainComp from "../../../../components/MainComp";
import CodeContainer from "../../../../components/CodeContainer";
import CodeTabs from "../../../../components/CodeTabs";
import CopyButton from "../../../../components/CopyButton";
import ImgContainer from "../../../../components/ImgContainer";
import Summary from "../../../../components/Summary";

import { Footer1, Footer2 } from './styles'

import GithubIcon from '../../../../assets/img/icon/githubIcon.png'
import LinkedinIcon from '../../../../assets/img/icon/linkedinIcon.png'

export default function FooterPage() {

    let copyHtmlRef = useRef()
    let copyCssRef = useRef()
    let copyHtmlRef2 = useRef()
    let copyCssRef2 = useRef()

    return(

        <>

            <MainComp to={'/components'}>

                <CodeContainer title={'Footer'} id="footerContainer">

                    <Summary list={[
                        {name:'Simple Footer', anchor: '#footer1'},
                        {name:'About/ContactUs Footer', anchor: '#footer2'},
                    ]}/>

                    <Footer1 id="footer1">

                        <p>Developed by: Butters Stotch</p>

                        <ul>
                            <li>
                                <a href="">
                                    <ImgContainer src={GithubIcon} alt={'Github icon'} style={{width: '16px'}}/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <ImgContainer src={LinkedinIcon} alt={'Linkedin icon'} style={{width: '16px'}}/>
                                </a>
                            </li>
                        </ul>

                    </Footer1>

                    <CodeTabs tabs={['Html', 'Css']}>

                        {/* HTML */}
                        <TabPanel>

                            <CopyButton copyRef={copyHtmlRef2} />

<pre ref={copyHtmlRef2}>{
`<footer>

    <p>Developed by: Butters Stotch</p>

    <ul>

        <li>
            <a href="your link here">
                <div class='imgContainer'>
                    <img src="YOUR IMG PATH" alt="YOUR ICON" style="width: 12px;">
                </div>
            </a>
        </li>

        <li>
        
            <a href="your link here">
                <div class='imgContainer'>
                    <img src="YOUR IMG PATH" alt="YOUR ICON" style="width: 12px;">
                </div>
            </a>
        </li>

    </ul>

</footer>`
}</pre>

                        </TabPanel>

                        {/* CSS */}
                        <TabPanel>

                            <CopyButton copyRef={copyCssRef2} />

<pre ref={copyCssRef2}>{
`footer {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.5rem;
    background-color: #96b060;
}

footer p {
    margin-right: 0.75rem;
    font-size: 0.875rem;
}

footer ul {

    display: flex;
    justify-content: space-between;
    align-items: center;

    li:not(li:last-child) {
        margin-right: 0.375rem;
    }
}
`
}</pre>

                        </TabPanel>

                    </CodeTabs>

                    <Footer2 id="footer2">

                        <span>

                            <div id="about">

                                <p>About</p>

                                <p>Ye lord! Mask of blood and flesh, all creation, flutter of wings, 
                                ye who bears the name of Man! Inferno and pandemonium, the sea barrier surges, 
                                march on to the south!</p>

                            </div>

                            <ul id="contactUs" aria-label="Contact Us:">

                                <li >
                                    <a href="" target="_blank">Linkedin</a>
                                </li>
                                <li >
                                    <a href="" target="_blank">Instagram</a>
                                </li>
                                <li >
                                    <a href="" target="_blank">DeviantArt</a>
                                </li>
                            </ul>

                            <span></span>

                            <p>Developed by: Izuru Kira</p>

                        </span>

                    </Footer2>

                    <CodeTabs tabs={['Html', 'Css']}>

                        {/* HTML */}
                        <TabPanel>

                            <CopyButton copyRef={copyHtmlRef} />

<pre ref={copyHtmlRef}>{
`<footer>

    <span>

        <div id="about">

            <p>About</p>

            <p>Ye lord! Mask of blood and flesh, all creation, flutter of wings, 
            ye who bears the name of Man! Inferno and pandemonium, the sea barrier surges, 
            march on to the south!</p>

        </div>

        <ul id="contactUs" aria-label="Contact Us:">

            <li >
                <a href="" target="_blank">Linkedin</a>
            </li>
            <li >
                <a href="" target="_blank">Instagram</a>
            </li>
            <li >
                <a href="" target="_blank">DeviantArt</a>
            </li>
        </ul>
        
        <span></span>

        <p>Developed by: Izuru Kira</p>
        
    </span>

</footer>`
}</pre>

                        </TabPanel>

                        {/* CSS */}
                        <TabPanel>

                            <CopyButton copyRef={copyCssRef} />

<pre ref={copyCssRef}>{
`/* ========================= FOOTER ========================= */

footer {
    padding: 1.313rem 0.5rem 0.5rem;
    margin-top: 3.125rem;
    text-align: center;
    background-color: #96b060;
}

footer a {
    color: black;
}

footer > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 463px;
    width: 95%;
    margin: 0 auto;
}

#about {
    width: 163px;
    text-align: left;
}

#about p:first-child {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
}

#contactUs {
    align-self: flex-start;
    text-align: left;
}

#contactUs li {
    font-size: 0.875rem;
}

#contactUs li:hover {
    font-style: italic;
    font-weight: bold;
}

#contactUs li:first-child {
    margin-top: 0.75rem;
}

#contactUs:before{
    content:attr(aria-label);
    font-size: 1.25rem;
}

footer span span {
    width: 100%;
}

footer span > p:last-child {
    margin: 2.25rem auto 0;
    align-self: center;
}
`
}</pre>

                        </TabPanel>

                    </CodeTabs>

                </CodeContainer>

            </MainComp>
        </>
    )
}