import React from "react";
import { Link } from "react-router-dom";
import MainComp from "../../../../components/MainComp";

import { GlobalStyle, CodeContainer } from './styles'

export default function ModalPage() {

    return (

        <>
            <GlobalStyle />

            <MainComp>

                <CodeContainer>

                    <Link to='/components'>Back</Link>

                    <h1>COMING SOOOOOON</h1>    

                </CodeContainer>
                
            </MainComp>
        </>
    )
}