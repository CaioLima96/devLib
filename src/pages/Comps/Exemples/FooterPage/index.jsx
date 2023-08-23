import React, { useRef }  from "react";
import { TabPanel } from '@chakra-ui/react'

import MainComp from "../../../../components/MainComp";
import CodeContainer from "../../../../components/CodeContainer";
import CodeTabs from "../../../../components/CodeTabs";
import CopyButton from "../../../../components/CopyButton";
import ImgContainer from "../../../../components/ImgContainer";
import Summary from "../../../../components/Summary";

import { GlobalStyle, Footer1, Footer2 } from './styles'

import GithubIcon from '../../../../assets/img/icon/githubIcon.png'
import LinkedinIcon from '../../../../assets/img/icon/linkedinIcon.png'

export default function FooterPage() {

    let copyHtmlRef = useRef()
    let copyCssRef = useRef()
    let copyHtmlRef2 = useRef()
    let copyCssRef2 = useRef()

    return(

        <>
            <GlobalStyle/>

            <MainComp to={'/components'}>

                <CodeContainer title={'Footer'} id="footerContainer">

                    <Summary list={[
                        {name:'Simple Footer', anchor: '#footer1'},
                        {name:'About/ContactUs Footer', anchor: '#footer2'},
                    ]}/>

                    <Footer1>

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

                        <ul>
                            <li id="about">
                                <p>About</p>
                                <p>Ye lord! Mask of blood and flesh, all creation, flutter of wings, ye who bears the name of Man! Inferno and pandemonium, the sea barrier surges, march on to the south!</p>
                            </li>

                            <li id="contactUs">
                                <p>Contact Us</p>
                                <a href="" target="_blank">Linkedin</a>
                                <a href="" target="_blank">Instagram</a>
                                <a href="" target="_blank">DeviantArt</a>
                            </li>
                        </ul>

                        <p>Developed by: <a href="" target="_blank">Izuru Kira</a></p>

                    </Footer2>

                    <CodeTabs tabs={['Html', 'Css']}>

                        {/* HTML */}
                        <TabPanel>

                            <CopyButton copyRef={copyHtmlRef} />

<pre ref={copyHtmlRef}>{
`<footer>

    <ul>
        <li id="about">
            <p>About</p>
            <p>Ye lord! Mask of blood and flesh, all creation, flutter of wings, 
            ye who bears the name of Man! Inferno and pandemonium, the sea barrier surges, 
            march on to the south!</p>
        </li>

        <li id="contactUs">
            <p>Contact Us</p>
            <a href="" target="_blank">Linkedin</a>
            <a href="" target="_blank">Instagram</a>
            <a href="" target="_blank">DeviantArt</a>
        </li>
    </ul>

    <p>Developed by: <a href="" target="_blank">Izuru Kira</a></p>

</footer>`
}</pre>

                        </TabPanel>

                        {/* CSS */}
                        <TabPanel>

                            <CopyButton copyRef={copyCssRef} />

<pre ref={copyCssRef}>{
`footer {display: flex;
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

                </CodeContainer>

            </MainComp>
        </>
    )
}