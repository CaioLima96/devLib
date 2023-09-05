import React from "react";

import { SummaryDiv } from './styles'

export default function Summary(props) {

    return (

        <>
            <SummaryDiv className="summary">

                <p>Summary</p>

                <ul>
                    {props.list.map((el, i) => {

                        return (
                            <li key={i}>
                                <a href={`${el.anchor}`}>{`${el.name}`}</a>
                            </li>
                        )
                    })}
                </ul>

            </SummaryDiv>
        </>
    )
}