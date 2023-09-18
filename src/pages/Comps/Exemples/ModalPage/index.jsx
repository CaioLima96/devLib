import React, { useEffect, useRef } from "react";
import { TabPanel } from '@chakra-ui/react'

import MainComp from "../../../../components/MainComp";
import CodeContainer from "../../../../components/CodeContainer";
import CodeTabs from "../../../../components/CodeTabs";
import CopyButton from "../../../../components/CopyButton";

import { GlobalStyle } from './styles'


export default function ModalPage() {

    let copyHtmlRef = useRef()
    let copyCssRef = useRef()
    let copyJsRef = useRef()

    let modal;
    useEffect(() => {
        modal = document.getElementsByClassName("modal")[0]
    }, []);

    function openModal() {

        modal.style.display = "block"
        document.body.style.overflow = 'hidden'
    }

    function closeModal() {

        modal.style.display = "none";
        document.body.style.overflow = ''
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {

        if (event.target === modal) {

            closeModal()
        }
    }

    return (

        <>
            <GlobalStyle />

            <MainComp to={'/components'} >

                <CodeContainer title={'Modal'} id="codeContainer">

                    <button className="defaultBtn openModalBtn" onClick={openModal}>Open Modal</button>
                    
                    <CodeTabs>
                        
                        {/* HTML */}
                        <TabPanel>

                            <CopyButton  copyRef={copyHtmlRef}/>

<pre ref={copyHtmlRef}>{
`<button 
    id="openModalBtn" 
    onclick="openModal()" 
    style="border: none; background-color: rgb(121, 129, 199); 
        padding: 0.375rem 0.563rem; border-radius: 
        5px; font-size: 1rem;  margin: 10px auto;"
>Open Modal</button>

<!-- The Modal -->
<div class="modal">

    <!-- Modal body -->
    <div class="modalBody">

        <div class="modalHeader">

            <p>Modal Header</p>
            <span class="closeModalBtn" onclick="closeModal()">&times;</span>

        </div>
        
        <div class="modalContent">

            <p style='text-align: center;'>Hello World</p>
                    
            <img src='https://media.tenor.com/Z6gmDPeM6dgAAAAM/dance-moves.gif' alt='NGGYU' style="margin: 10px auto; display: block;">

        </div>

        <div class="modalFooter">

            <p>Modal Footer</p>
            
        </div>

    </div>

</div>`
}</pre>

                        </TabPanel>

                        {/* CSS */}
                        <TabPanel>

                            <CopyButton  copyRef={copyCssRef}/>

<pre ref={copyCssRef}>{
`/*======================== MODAL ========================*/

.openModalBtn {
    display: flex;
    justify-content: flex-start;
    font-size: 1rem;
    background-color: #7981C7;
    border: none;
    padding: 0.375rem 0.563rem;
    border-radius: 5px;
    margin: 10px auto;
}

.openModalBtn:hover {
    cursor: pointer;
}


/* ========= Modal Background =========*/

.modal {
    display: none;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
}

.modal::-webkit-scrollbar {
    width: 0;
    background: transparent;
}


/* ========= Modal Body =========*/

.modalBody {
    max-width: 1140px;
    width: 90%;
    overflow: hidden;

    position: relative;
    background-color: #fefefe;
    margin: 1.75rem auto;
    border-radius: 0.3rem;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s
}

/* Animation */
    @-webkit-keyframes animatetop {
    from {top:-300px; opacity:0} 
    to {top:0; opacity:1}
}

@keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
}

.closeModalBtn {
    color: black;
    font-size: 28px;
    font-weight: bold;
}

.closeModalBtn:hover, .closeModalBtn:focus {
    text-decoration: none;
    cursor: pointer;
}

.modalHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    padding: 0.25rem 0.75rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #cecece;
}

.modalContent {
    margin: 2.5rem 0;
    padding: 0 0.75rem;
}

.modalFooter {
    padding: 0.313rem 0.75rem;
    font-size: 0.813rem;
    border-top: 1px solid #cecece;
    text-align: center;
}`
}</pre>
                        </TabPanel>

                        {/* JS */}
                        <TabPanel>

                            <CopyButton  copyRef={copyJsRef}/>
                            
<pre ref={copyJsRef}>{
`//======================== MODAL ========================


let modal = document.querySelector(".modal");

function openModal() {

    modal.style.display = "block"
    document.body.style.overflow = 'hidden'
}

function closeModal() {

    modal.style.display = "none";
    document.body.style.overflow = ''  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {

    if (event.target == modal) {

        closeModal()
    }
}`
}</pre>

                        </TabPanel>

                    </CodeTabs>

                </CodeContainer>

                <div className="modal">

                    <div className="modalBody">

                        <div className="modalHeader">
                            <p>Modal Header</p>
                            <span className="closeModalBtn" onClick={closeModal}>&times;</span>
                        </div>
                        
                        <div className="modalContent">
                
                            <p style={{textAlign: 'center'}}>Hello World</p>

                            <img style={{margin:'10px auto'}} src='https://media.tenor.com/Z6gmDPeM6dgAAAAM/dance-moves.gif' alt='NGGYU'/>

                        </div>

                        <div className="modalFooter">
                            <p>Modal Footer</p>
                        </div>

                    </div>
                
                </div>

            </MainComp>
        </>
    )
}