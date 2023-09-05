import React, {useRef}   from "react";
import { TabPanel } from '@chakra-ui/react'

import MainComp from "../../../../components/MainComp";
import CodeContainer from "../../../../components/CodeContainer";
import CodeTabs from "../../../../components/CodeTabs";
import CopyButton from "../../../../components/CopyButton";
import Summary from "../../../../components/Summary";


export default function SummaryPage () {

    let copyHtmlRef = useRef()
    let copyCssRef = useRef()

    return (

        <>
        
            <MainComp to={'/components'}>

                <CodeContainer title={'Summary'}>

                    <Summary list={[
                        {name:'Lorem', anchor: '#'},
                        {name:'Ipsum', anchor: '#'},
                    ]}/>

                    <CodeTabs tabs={['Html', 'Css']}>

                        {/* HTML */}
                        <TabPanel>

                            <CopyButton copyRef={copyHtmlRef} />
<pre ref={copyHtmlRef}>{
`<div class="summary">

    <p>Summary</p>

    <ul>
        <li>
            <a href="">Lorem</a>
        </li>
        <li>
            <a href="">Ipsum</a>
        </li>
    </ul>

</div>`
}</pre>
                        </TabPanel>


                        {/* CSS */}
                        <TabPanel>

                            <CopyButton copyRef={copyCssRef} />

<pre ref={copyCssRef}>{
`/*============ SUMMARY ============*/

.summary {
    display: inline-block;
    text-align: left;
    border: 1px solid black;
    border-radius: 0.125rem;
    padding: 0.938rem 0.813rem 0.938rem;
    margin-bottom: 3.125rem;
    box-shadow: 4px 4px 0px -1px rgb(0 0 0 / 75%);
}
    
.summary p {
    font-size: 1.375rem;
    margin-bottom: 0.625rem;
}

.summary li {
    list-style: inside !important;
 }

.summary li:not(li:last-child) {
    margin-bottom: 0.313rem;
}

.summary li a {
    font-size: 0.875rem;
    margin-bottom: 0.313rem;
    font-style: normal;
    color: black;
    text-decoration: none;
}

.summary li a:hover{
    text-decoration: underline;
}`
}</pre>

                        </TabPanel>

                    </CodeTabs>

                </CodeContainer>

            </MainComp>
        
        </>
    )
}