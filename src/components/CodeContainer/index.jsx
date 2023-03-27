import React from "react";

import { CodeDiv } from './styles'

export default function CodeContainer(props) {

    return (

        <CodeDiv>

            <div id="codeHeader">

                <p>{props.title}</p>
                <hr/>

            </div>

            <div id="codeBody">
                {props.children}
            </div>

        </CodeDiv>
    )
}