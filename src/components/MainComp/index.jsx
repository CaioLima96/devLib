import React, { useRef } from "react";
import { Link } from "react-router-dom";

import ImgContainer from '../ImgContainer'
import { Main } from './styles'

import LeftArrow1 from '../../assets/img/icon/leftArrow1.png'

export default function MainComp(props) {

    // function closeNavBar() {

    //     let headerNavMenu = document.getElementById("headerNavMenu")
    //     headerNavMenu.classList.remove('hideShowHeaderNavMenu')
    // }

    return(

        <Main to={props.to} {...props} 
        // onClick={closeNavBar}
        >
            
            {props.to ? <Link to={props.to}><ImgContainer src={LeftArrow1} alt='Arrow Icon'/> <p>Back</p></Link> : ''}

            {props.children}

        </Main>
    )
}