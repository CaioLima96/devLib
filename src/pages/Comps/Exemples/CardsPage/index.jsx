import React, { useRef }  from "react";
import { TabPanel } from '@chakra-ui/react'

import { SimpleRectangleCard } from './styles'

import MainComp from "../../../../components/MainComp";
import CodeContainer from "../../../../components/CodeContainer";
import CodeTabs from "../../../../components/CodeTabs";
import CopyButton from "../../../../components/CopyButton";
import ImgContainer from "../../../../components/ImgContainer";
import Summary from "../../../../components/Summary";

import Dig from '../../../../assets/img/digFullBody.png'
import Diamante from '../../../../assets/img/diamante-(classico)-1.png'

export default function CardsPage () {

    let copyHtmlRef = useRef()
    let copyCssRef = useRef()

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

                    <SimpleRectangleCard id='card1'>
                        
                        <ImgContainer src={Diamante} alt={'Diamante'}/>

                        <div class="cardDescription">
                            <a href="#">
                                <p>DiamondHead</p>
                            </a>
                        </div>

                    </SimpleRectangleCard>

                    <CodeTabs tabs={['Html', 'Css']}>

                        {/* HTML */}
                        <TabPanel>

                            <CopyButton copyRef={copyHtmlRef} />

<pre ref={copyHtmlRef}>{
`<li class="simpleRectangleCard" >
                        
    <div class="imgContainer">
        <img src="YOUR IMG HERE" alt="ALT">
    </div>

    <div class="cardDescription">
        <a href="#" target="_blank">
            <p>Exemple</p>
        </a>
    </div>
                    
</li>`
}</pre>

                        </TabPanel>

                        {/* CSS */}
                        <TabPanel>

                            <CopyButton copyRef={copyCssRef} />

<pre ref={copyCssRef}>{
`/* ========================= CARD ========================= */

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

                </CodeContainer>

            </MainComp>
        </>
    )
}