import React from "react";
import ImgContainer from "../ImgContainer";
import { GlobalStyle, Load } from './styles'

import LoadingImg from '../../assets/img/icon/loading.png'


export default function LoadingComp() {
    
    return (

        <>
            <GlobalStyle/>

            <Load className="loading">

                <ImgContainer src={LoadingImg} alt={"Loading Icon"} rotate='rotate' />

                <p>Loading...</p>

            </Load>
        </>
    )
}