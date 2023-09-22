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
import FacebookIcon from '../../../../assets/img/icon/deviantartIcon.png'
import LinkedinIcon from '../../../../assets/img/icon/linkedinIcon.png'
import GithubIcon from '../../../../assets/img/icon/githubIcon.png'

export default function CardsPage () {

    let copyHtmlRef = useRef()
    let copyCssRef = useRef()
    let copyHtmlRef2 = useRef()
    let copyCssRef2 = useRef()
    let copyHtmlRef3 = useRef()
    let copyCssRef3 = useRef()

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
                                    <img src={FacebookIcon} alt={'FacebookIcon'} />
                                    <img src={LinkedinIcon} alt={'LinkedinIcon'} />
                                    <img src={GithubIcon} alt={'GithubIcon'}/>
                                </div>

                                <a href="" target="_blank">
                                    Wolfenstein 2
                                </a>

                            </div>
                            
                        </li>

                        <li class="rectangleHovDescCard">

                            <ImgContainer src={'https://thumbnails.pcgamingwiki.com/c/ce/High_on_Life_cover.png/300px-High_on_Life_cover.png'} alt={'aaaa'}/>

                            <div class="cardInfo">

                                <div>
                                    <img src={FacebookIcon} alt={'FacebookIcon'} />
                                    <img src={LinkedinIcon} alt={'LinkedinIcon'} />
                                    <img src={GithubIcon} alt={'GithubIcon'}/>
                                </div>

                                <a href="" target="_blank">
                                    High on Life
                                </a>

                            </div>
                            
                        </li>

                        <li class="rectangleHovDescCard">

                            <ImgContainer src={'https://assets.altarofgaming.com/wp-content/uploads/2021/11/star-wars-jedi-fallen-order-poster-art-altar-of-gaming-727x1024.jpg'} alt={'aaaa'}/>

                            <div class="cardInfo">

                                <div>
                                    <img src={FacebookIcon} alt={'FacebookIcon'} />
                                    <img src={LinkedinIcon} alt={'LinkedinIcon'} />
                                    <img src={GithubIcon} alt={'GithubIcon'}/>
                                </div>

                                <a href="" target="_blank">
                                    Jedi Fallen Order
                                </a>

                            </div>
                            
                        </li>

                    </RectangleHovDescList>

                    <CodeTabs tabs={['Html', 'Css']}>

                        {/* HTML */}
                        <TabPanel>

                            <CopyButton copyRef={copyHtmlRef3} />

<pre ref={copyHtmlRef3}>{
`<ul class="rectangleHovDescList">

    <li class="rectangleHovDescCard">

        <div class="imgContainer">
            <img src="YOUR IMG HERE" alt="">
        </div>

        <div class="cardInfo">

            <div>
                <a href="" target="_blank"><img src="YOUR IMG HERE" alt=""></a>
                <a href="" target="_blank"><img src="YOUR IMG HERE" alt=""></a>
                <a href="" target="_blank"><img src="YOUR IMG HERE" alt=""></a>
            </div>

            <a href="" target="_blank">
                Lorem Ipsum
            </a>

        </div>
        
    </li>

</ul>`
}</pre>

                        </TabPanel>

                        {/* CSS */}
                        <TabPanel>

                            <CopyButton copyRef={copyCssRef3} />

<pre ref={copyCssRef3}>{
`/* ========================= CARD ========================= */

.rectangleHovDescList {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.rectangleHovDescCard {
    position: relative;
    width: 280px;
    list-style: none;
    margin: 1%;
    border-radius: 0.125rem;
}

.rectangleHovDescCard > .imgContainer {
    width: 100%;
    height: 350px;
    overflow: hidden;
    border-radius: 2px;
}

.rectangleHovDescCard .cardInfo {
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: column;
    padding-bottom: 0.5rem;
    position: absolute;
    top: 76%;
    bottom: 0;
    left: 0;
    right: 0;
    height: 24%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #96B060;
    border-top-left-radius: 247% !important;
    border-top-right-radius: 247% !important;
}

.rectangleHovDescCard:hover .cardInfo {
    opacity: 1;
}

.rectangleHovDescCard .cardInfo > div:first-child {
    margin-bottom: 0.125rem;
}

.rectangleHovDescCard .cardInfo > div:first-child img {
    width: 20px;
    height: 20px;
    display: inline-flex;
}

.rectangleHovDescCard .cardInfo > div:first-child img:not(img:last-child) {
    margin-right: 0.313rem;
}

.rectangleHovDescCard .cardInfo a {
    color: white;
}

.rectangleHovDescCard .cardInfo img:hover, .rectangleHovDescCard .cardInfo a:hover {
    cursor: pointer;
}

@media (max-width: 694px) {

    .rectangleHovDescList {
        justify-content: center !important;
    }

    .rectangleHovDescCard:not(.rectangleHovDescCard:last-child) {
        margin-bottom: 0.625rem;
    }
}`
}</pre>

                        </TabPanel>

                    </CodeTabs>

                </CodeContainer>

            </MainComp>
        </>
    )
}