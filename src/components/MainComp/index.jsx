import React from "react";
import { Link } from "react-router-dom";

import ImgContainer from '../ImgContainer'
import { GlobalStyle, Main } from './styles'

import LeftArrow1 from '../../assets/img/icon/leftArrow1.png'

export default function MainComp(props) {
    
    return(
        
        <>
            <GlobalStyle/>
            
            <Main to={props.to} {...props}>
                
                {props.to ? <Link to={props.to}><ImgContainer src={LeftArrow1} alt='Arrow Icon'/> <p>Back</p></Link> : ''}

                {props.children}

            </Main>
        </>
    )
}