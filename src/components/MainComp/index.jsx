import React from "react";
import { Link } from "react-router-dom";
import { Main } from './styles'

export default function MainComp(props) {

    return(

        <Main to={props.to} {...props}>
            
            {props.to ? <Link to={props.to}><p>Back</p></Link> : ''}

            {props.children}

        </Main>
    )
}