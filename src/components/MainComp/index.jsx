import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Main } from './styles'

export default function MainComp(props) {

    function closeNavBar() {

        let headerNavMenu = document.getElementById("headerNavMenu")
        headerNavMenu.classList.remove('hideShowHeaderNavMenu')
    }

    return(

        <Main to={props.to} {...props} onClick={closeNavBar}>
            
            {props.to ? <Link to={props.to}><p>Back</p></Link> : ''}

            {props.children}

        </Main>
    )
}