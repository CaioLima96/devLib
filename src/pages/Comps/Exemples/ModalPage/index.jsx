import React from "react";
import { Link } from "react-router-dom";
import MainComp from "../../../../components/MainComp";
import CodeContainer from "../../../../components/CodeContainer";

import { GlobalStyle } from './styles'

export default function ModalPage() {

    return (

        <>
            <GlobalStyle />
            
            <MainComp to={'/components'} style={{backgroundColor: '#D9D9D9'}}>

                <CodeContainer title={'Modal'}>

                    AAAAAAAAAAAAAAAAAAA

                </CodeContainer>
                
            </MainComp>
        </>
    )
}