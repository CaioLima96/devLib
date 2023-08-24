import React, { useRef } from "react";
import { TabPanel } from '@chakra-ui/react'

import MainComp from "../../../../components/MainComp";
import CodeContainer from "../../../../components/CodeContainer";
import CodeTabs from "../../../../components/CodeTabs";
import CopyButton from "../../../../components/CopyButton";
import LoadingComp from "../../../../components/LoadingComp";

import { GlobalStyle } from './styles'

export default function LoadingPage() {

    let copyHtmlRef = useRef()
    let copyCssRef = useRef()
    let copyJsRef = useRef()

    return (

        <>
            <GlobalStyle />

            <MainComp to={'/components'}>

                <CodeContainer title={'Loading'} id="codeContainer">

                    <p>If you don't want your Loading icon to rotate, just remove the <strong>rotate class</strong> from imgContainer.</p>

                    <p>You can right click and download this loading png.</p>

                    <LoadingComp/>

                    <CodeTabs>

                        {/* HTML */}
                        <TabPanel>

                            <CopyButton copyRef={copyHtmlRef} />

<pre ref={copyHtmlRef}>{
`<div class="loading">

    <div class='imgContainer rotate'><img src='./assets/img/icons/loading.png' alt="Loading Icon"></div>
    <p>Loading...</p>

</div>`
}</pre>

                        </TabPanel>

                        {/* CSS */}
                        <TabPanel>

                            <CopyButton copyRef={copyCssRef} />

<pre ref={copyCssRef}>{
`/*============ LOADING ============*/

.loading {
    width: 180px;
    margin: 4.125rem auto;
    text-align: center;
    user-select: none;
}

.loading p {
    margin-top: 1rem;
    font-size: 1.5rem;
}

.rotate {
    animation: rotation 2.5s infinite linear;
}

@keyframes rotation {
    from {
    transform: rotate(0deg);
    }
    to {
    transform: rotate(359deg);
    }
}`
}</pre>

                        </TabPanel>

                        {/* JS */}
                        <TabPanel>

                            <CopyButton copyRef={copyJsRef} />

<pre ref={copyJsRef}>{
`//This codes only serve to change the loading icon according to a value, this isnt necessary for the "default" loading to work.


//====================== LOADING

//change loading img according to the selected value
function loading(value) {

	let loading = document.getElementsByClassName('loading')[0]

	let loadingImgContainer = loading.getElementsByClassName('imgContainer')[0]

	let loadingImg = loading.getElementsByClassName('imgContainer')[0].getElementsByTagName('img')[0]


    //adding the rotate class is optional.

	switch (value) {

		case 1:

			loadingImgContainer.classList.add('rotate')
			loadingImg.src = './assets/img/icons/YOURLOADINGICON.png'

			break

		case 2:

			loadingImgContainer.classList.add('rotate')
			loadingImg.src = './assets/img/icon/YOURLOADINGICON.png'

			break
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