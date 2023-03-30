import React from "react";
import MainComp from "../MainComp";

import { GlobalStyle } from './styles'

export default function CommingSoon() {

    return (

        <>

            <GlobalStyle />

            <MainComp to={'/components'} style={{backgroundColor: '#D9D9D9'}}>
                
                <h1>COMING SOOOOOON</h1>    

            </MainComp>
        
        </>
        
    )
}