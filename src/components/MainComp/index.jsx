import React from "react";
import { Main } from './styles'

export default function MainComp(props) {

    return(

        <Main>
            {props.children}
        </Main>
    )
}