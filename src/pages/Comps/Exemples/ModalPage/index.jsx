import React, { useEffect } from "react";
import { ChakraProvider, ChakraBaseProvider, Tabs, TabList, TabPanels, Tab, TabPanel, useTab, Button, } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import MainComp from "../../../../components/MainComp";
import CodeContainer from "../../../../components/CodeContainer";

import { GlobalStyle } from './styles'


export default function ModalPage() {

    //====================== MODAL

    let modal;
    let modalContent;
    useEffect(() => {
        modal = document.getElementsByClassName("modal")[0]
        modalContent = modal.getElementsByClassName('modalContent')[0]
        console.log(modal)
    }, []);

    function openModal() {

        // modalContent.innerHTML = ''
        modal.style.display = "block"
        document.body.style.overflow = 'hidden'
    }

    function closeModal() {

        // modalContent.innerHTML = ''
        modal.style.display = "none";
        document.body.style.overflow = ''
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {

        if (event.target == modal) {

            closeModal()
        }
    }

    const CustomTab = React.forwardRef((props, ref) => {

        // 1. Reuse the `useTab` hook
        const tabProps = useTab({ ...props, ref })
        const isSelected = !!tabProps['aria-selected']

        return (
            <Button
                className={'codeTabListTab ' + (isSelected ? 'selected' : 'notSelected')}
                {...tabProps}
            >
                {tabProps.children}
            </Button>
        )
    })

    return (

        <>
            <GlobalStyle />
            {/* className={isSelected ? 'notSelected' : 'selected'} */}
            <ChakraBaseProvider>

                <MainComp to={'/components'} style={{ backgroundColor: '#D9D9D9' }}>

                    <CodeContainer title={'Modal'} id="codeContainer">

                        <button id="openModalBtn" className="defaultBtn" onClick={openModal}>Open Modal</button>

                        <Tabs variant='unstyled' defaultIndex={0}>

                            <TabList>
                                <CustomTab>
                                    <p>Html</p>
                                </CustomTab>
                                <CustomTab >
                                    <p>Css</p>
                                </CustomTab>
                                <CustomTab>
                                    <p>Js</p>
                                </CustomTab>
                            </TabList>

                            <TabPanels style={{ backgroundColor: '#1E1E1E', color: '#f7f7f7' }}>

                                {/* HTML */}
                                <TabPanel>

<pre>
{
`<!-- The Modal -->
<div class="modal">

    <!-- Modal body -->
    <div class="modalBody">

        <div class="modalHeader">

            <p>Modal Header</p>
            <span class="closeModalBtn" onclick="closeModal()">&times;</span>

        </div>
        
        <div class="modalContent">

            <p>Hello World</p>

        </div>

        <div class="modalFooter">

            <p>Modal Footer</p>
            
        </div>

    </div>

</div>`
}
</pre>

                                </TabPanel>

                                {/* CSS */}
                                <TabPanel>

<pre>{
`/* ========= Modal Background =========*/

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
    font-size: 1.25rem;
    padding: 0 0.75rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #cecece;
    text-align: right;
}

.modalFooter {
    padding: 0.188rem 0;
    font-size: 0.813rem;
    border-top: 1px solid #cecece;
}

.modalContent {
    margin: 2.5rem auto;
}



/* ========================= @MEDIA ========================= */

/* Do your media queries here  */`
}</pre>

                                </TabPanel>

                                {/* JS */}
                                <TabPanel>

<pre>{
`//====================== MODAL

let modal = document.querySelector(".modal");
let modalContent = modal.getElementsByClassName('modalContent')[0]

function openModal() {

    modalContent.innerHTML = ''
    modal.style.display = "block"
    document.body.style.overflow = 'hidden'
}

function closeModal() {

    modalContent.innerHTML = ''
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

                            </TabPanels>
                        </Tabs>

                    </CodeContainer>

                    <div className="modal">

                        <div className="modalBody">

                            <div className="modalHeader">
                                <p>Modal Header</p>
                                <span className="closeModalBtn" onClick={closeModal}>&times;</span>
                            </div>
                            
                            <div className="modalContent">
                    
                                <p>Hello World</p>

                                <img style={{margin:'10px auto 0'}} src='https://media.tenor.com/Z6gmDPeM6dgAAAAM/dance-moves.gif' alt='NGGYU'/>

                            </div>

                            <div className="modalFooter">
                                <p>Modal Footer</p>
                            </div>

                        </div>
                    
                    </div>

                </MainComp>

            </ChakraBaseProvider>
        </>
    )
}