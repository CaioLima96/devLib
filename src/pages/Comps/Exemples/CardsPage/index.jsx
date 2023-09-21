import React, { useRef }  from "react";
import { TabPanel } from '@chakra-ui/react'

import { SimpleRectangleList, SimpleSquareList, RectangleHovDescList } from './styles'

import MainComp from "../../../../components/MainComp";
import CodeContainer from "../../../../components/CodeContainer";
import CodeTabs from "../../../../components/CodeTabs";
import CopyButton from "../../../../components/CopyButton";
import ImgContainer from "../../../../components/ImgContainer";
import Summary from "../../../../components/Summary";

import Dig from '../../../../assets/img/digFullBody.png'
import Mumbra from '../../../../assets/img/mumbra03.png'
import PlatNume from '../../../../assets/img/PlatinumNumemon03.png' 
import Diamante from '../../../../assets/img/diamante-(classico)-1.png'
import Calafrio from '../../../../assets/img/calafrio1.png'
import Feedback from '../../../../assets/img/feedback1.png'
import QuatroBracos from '../../../../assets/img/4-bracos1.png'

export default function CardsPage () {

    let copyHtmlRef = useRef()
    let copyCssRef = useRef()
    let copyHtmlRef2 = useRef()
    let copyCssRef2 = useRef()

    return(
        <>
            <MainComp to={'/components'}>

                <CodeContainer title={'Cards'}>

                    <Summary list={[
                        {name:'Card 1', anchor: '#card1'},
                        {name:'Card 2', anchor: '#card2'},
                        {name:'Card 3', anchor: '#card3'},
                        {name:'Card 4', anchor: '#card3'},
                    ]}/>


                    {/* CARD 1 */}
                    <SimpleRectangleList id='card1'>
                        
                        <li>
                            <ImgContainer src={Diamante} alt={'Diamante'}/>

                            <div class="cardDescription">
                                <a href="#">
                                    <p>DiamondHead</p>
                                </a>
                            </div>
                        </li>

                        <li>

                            <ImgContainer src={Calafrio} alt={'Calafrio'}/>

                            <div class="cardDescription">
                                <a href="#">
                                    <p>Calafrio</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <ImgContainer src={Feedback} alt={'Feedback'}/>

                            <div class="cardDescription">
                                <a href="#">
                                    <p>Feedback</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <ImgContainer src={QuatroBracos} alt={'QuatroBracos'}/>

                            <div class="cardDescription">
                                <a href="#">
                                    <p>Quatro Bracos</p>
                                </a>
                            </div>
                        </li>

                    </SimpleRectangleList>

                    <CodeTabs tabs={['Html', 'Css']}>

                        {/* HTML */}
                        <TabPanel>

                            <CopyButton copyRef={copyHtmlRef} />

<pre ref={copyHtmlRef}>{
`<ul class="simpleRetangleList">

    <li class="simpleRectangleCard" >
                            
        <div class="imgContainer">
            <img src="YOUR IMG HERE" alt="ALT">
        </div>

        <div class="cardDescription">
            <a href="#" target="_blank">
                <p>Exemple</p>
            </a>
        </div>
                        
    </li>

</ul>`
}</pre>

                        </TabPanel>

                        {/* CSS */}
                        <TabPanel>

                            <CopyButton copyRef={copyCssRef} />

<pre ref={copyCssRef}>{
`/* ========================= CARD ========================= */

.simpleRetangleList {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.simpleRectangleCard {
    width: 202px;
    list-style: none;
    margin-right: 2%;
    margin-bottom: 2%;
    border: 1px solid red;
}

.simpleRectangleCard .imgContainer {
    width: 100%;
    height: 248px;
    padding: 0.625rem;

    background-image: url(YOUR IMG HERE);
    background-size: contain;
    background-repeat: no-repeat;
    background-color: black;

    overflow: hidden;
}

.simpleRectangleCard .imgContainer img {
    object-fit: contain !important;
}

.simpleRectangleCard .cardDescription {
    text-align: center;
    font-size: 1.25rem;
}

.simpleRectangleCard .cardDescription a {
    color: black;
}

.simpleRectangleCard .cardDescription a:hover {
    font-style: italic;
}

.simpleRectangleCard .cardDescription p {
    margin: 0.5rem 0;
    pointer-events: none;
}

@media (max-width: 505px) {
    
    .simpleRectangleCard  {
        width: 251px;
    }   
    
    .simpleRectangleCard .imgContainer {
        height: 308px;
    }
}

@media (min-width: 1024px) {
    
    .simpleRectangleCard .imgContainer:hover {
        transition: 1s all;
        transform: scale(1.2);
        z-index: 5 !important;
    }    
}`
}</pre>

                        </TabPanel>

                    </CodeTabs>


                    {/* CARD 2 */}
                    <SimpleSquareList id='card2'>

                        <li>

                            <a href="#">

                                <ImgContainer src={Dig} alt={'Dig'}/>

                                <p>Dig</p>

                            </a>

                        </li>

                        <li>

                            <a href="#">

                                <ImgContainer src={PlatNume} alt={'PlatNume'}/>

                                <p>PlatinumNumemon</p>

                            </a>

                        </li>

                        <li>

                            <a href="#">

                                <ImgContainer src={Mumbra} alt={'Mumbra'}/>

                                <p>Mumbra</p>

                            </a>

                        </li>

                    </SimpleSquareList>

                    <CodeTabs tabs={['Html', 'Css']}>

                        {/* HTML */}
                        <TabPanel>

                            <CopyButton copyRef={copyHtmlRef2} />

<pre ref={copyHtmlRef2}>{
`<ul class="simpleSquareList">

    <li class='simpleSquareCard'>

        <a href="#">

            <div class="imgContainer">
                <img src="YOUR IMG HERE" alt="alt">
            </div>

            <p>aaaa</p>

        </a>

    </li>

</ul>`
}</pre>

                        </TabPanel>

                        {/* CSS */}
                        <TabPanel>

                            <CopyButton copyRef={copyCssRef2} />

<pre ref={copyCssRef2}>{
`/* ========================= CARD ========================= */

.simpleSquareList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.625rem;
}

.simpleSquareCard {
    max-width: 270px;
    width: 100%;
    height: 250px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid rgb(163, 163, 163);
    overflow: hidden;
    text-align: center;
    transition: all 0.4s ease 0s;
}

.simpleSquareCard:hover {
    transform: scale(1.05); 
}

.simpleSquareCard a {
    display: flex;
    flex-direction: column;
    height: 100%;
    user-select: none;
    color: black;
}

.simpleSquareCard:hover a {
    color: black !important;
}

.simpleSquareCard a > div:first-child {
    align-self: center;
    flex: 1;
    padding: 0.625rem;
    height: 206px;
}

.simpleSquareCard a > div:first-child img {
    object-fit: contain !important;
}

.simpleSquareCard a:visited {
    color: #6036f3;
}

.simpleSquareCard p {
    font-size: 1.125rem;
    padding: 0.625rem 0;
    background-color: #D9D9D9;
}

.simpleSquareCard:hover p {
    background-color: rgb(150, 176, 96);
}`
}</pre>

                        </TabPanel>

                    </CodeTabs>


                    {/* CARD 3 */}
                    <RectangleHovDescList id='card3'>

                        <li class="rectangleHovDescCard">

                            <ImgContainer src={'https://m.media-amazon.com/images/I/91fR0oBKxbL._AC_UF1000,1000_QL80_.jpg'} alt={'aaaa'}/>

                            <div class="cardInfo">

                                <div>
                                    <a href="" target="_blank"></a>

                                    <a href="" target="_blank"></a>

                                    <a href="" target="_blank"></a>
                                </div>

                                <a href="" target="_blank">
                                    <p>aaaa</p>
                                </a>

                            </div>
                            
                        </li>

                    </RectangleHovDescList>

                </CodeContainer>

            </MainComp>
        </>
    )
}