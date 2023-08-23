import React, {useRef}  from "react";
import { TabPanel } from '@chakra-ui/react'

import MainComp from "../../../../components/MainComp";
import CodeContainer from "../../../../components/CodeContainer";
import CodeTabs from "../../../../components/CodeTabs";
import CopyButton from "../../../../components/CopyButton";
import ImgContainer from "../../../../components/ImgContainer";

import { Main } from "./styles";

export default function MainPage() {

    let copyHtmlRef = useRef()
    let copyCssRef = useRef()

    return (
        <>
        
            <MainComp to={'/components'}>

                <CodeContainer title={'Main'} id="codeContainer">

                    <Main>
                        <p>This is a Main tag exemple.</p>
                    </Main>

                    <CodeTabs tabs={['Html', 'Css']}>

                        {/* HTML */}
                        <TabPanel>

                            <CopyButton copyRef={copyHtmlRef} />

<pre ref={copyHtmlRef}>{
`<main>

    <p style="text-align: center; margin: 16px auto;">This is a Main tag exemple.</p>

</main>`
}</pre>

                        </TabPanel>

                        {/* CSS */}
                        <TabPanel>

                            <CopyButton copyRef={copyCssRef} />

<pre ref={copyCssRef}>{
`/*======================== MAIN ========================*/

main {
    width: 90%;
    max-width: 960px;
    margin: 5rem auto;
    border: 1px solid black; /*use this to help you see the boundaries of an element*/
}`
}</pre>

                        </TabPanel>

                    </CodeTabs>

                </CodeContainer>
                
            </MainComp>
        
        </>
    )
}