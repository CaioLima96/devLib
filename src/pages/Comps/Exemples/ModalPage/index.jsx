import React from "react";
import MainComp from "../../../../components/MainComp";
import CodeContainer from "../../../../components/CodeContainer";

import { GlobalStyle } from './styles'

export default function ModalPage() {

    return (

        <>
            <GlobalStyle />
            
            <MainComp to={'/components'} style={{backgroundColor: '#D9D9D9'}}>

                <CodeContainer title={'Modal'}>

                    <button id="openModalBtn" className="defaultBtn">Open Modal</button>

                </CodeContainer>
                
            </MainComp>
        </>
    )
}