import React, {useEffect} from "react";
import { ChakraProvider, ChakraBaseProvider, Tabs, TabList, TabPanels, Tab, TabPanel,useTab, Button, } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import MainComp from "../../../../components/MainComp";
import CodeContainer from "../../../../components/CodeContainer";

import { GlobalStyle } from './styles'


export default function ModalPage() {

    let modal;
	useEffect(() => {
		modal = document.getElementsByClassName("modal")[0]
		console.log(modal)
	}, []);

    function openModal() {
		if(modal) {
			document.getElementsByClassName("modal")[0].style.display = "block"
			document.body.style.overflow = 'hidden'
		}
		console.log('open')
		// modal.style.display = "block"
		document.body.style.overflow = 'hidden'
	}

	function closeModal() {
		modal.style.display = "none";
		document.body.style.overflow = ''
		console.log('close')
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		// let modal = document.getElementsByClassName("modal")[0]
		console.log('evento: ', event)
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

                            <TabPanels style={{backgroundColor: '#1E1E1E', color: '#f7f7f7'}}>
                                
                                {/* HTML */}
                                <TabPanel>

<pre>{
`<div id="myModal" class="modal">

    <div class="modal-body">

        <div class="modal-header">;

            <span class="close" onclick="closeModal()">x</span>;
            <h2>4 Braços</h2>;

        </div>

        <ul id="primeBenOsFourArmsModal" class="modal-card-list">

            <li> class="modal-card" id="primeBenOsFourArms1">

                <img src="./assets/img/aliens/ben-prime/classico/4-bracos-(classico)-1.png" alt="primeBenOsFourArms">

            </li>

            <li> class="modal-card" id="primeBenOsFourArms1">

                <img src="./assets/img/aliens/ben-prime/classico/4-bracos-(classico)-1.png" alt="primeBenOsFourArms">

            </li>

        </ul>

    </div>

</div>`
}</pre>

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
    padding: 0 0.75rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--grey3);
    text-align: right;
}

.modalFooter {
    padding: 2px 16px;
    color: white;
}

.modalContent #containerList, .modalContent #ideasList {
    margin: 0 auto;
    max-width: none
}

.modalContent #listMenu > button:last-child {
    display: none;
}

.modalContent #ideasList li {
    color: black !important;
}

.modalHeader #listMenu {
    display: flex;
}



/* ========================= @MEDIA ========================= */

@media (max-width: 699px) {

    .modalContent #ideasList li {
        width: 100% !important;
    }
}`
}</pre>
                                     
                                </TabPanel>

                                {/* JS */}
                                <TabPanel>
                                   
<pre>{
`//====================== MODAL

let modal = document.querySelector(".modal");

function openModal() {

    modal.getElementsByClassName('modalContent')[0].innerHTML = ''
    modal.style.display = "block"
    document.body.style.overflow = 'hidden'
}

function closeModal() {

    modal.getElementsByClassName('modalContent')[0].innerHTML = ''
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
                                <span onClick={closeModal} className="closeModalBtn" >&times;</span>
                            </div>

                            <div className="modalContent">

                                <p>Hello World</p>

                            </div>

                            <div className="modalFooter">

                            </div>

                        </div>

                    </div>

                </MainComp>

            </ChakraBaseProvider>
        </>
    )
}