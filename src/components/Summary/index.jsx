import React from "react";

import {SummaryDiv,} from './styles'

export default function Summary(props) {

    // list={[{name:'', anchor: ''}]},

    return(

        <>

            {/* <div id="summary">

                <p>Summary</p>

                <ul>
                    <li><a href="#footer1">Simple Footer</a></li>
                    <li><a href="#footer2">About/ContactUs Footer</a></li>
                </ul>

            </div> */}

            <SummaryDiv>

                <p>Summary</p>

                {props.list.map((el, i) => {

                    return (
                        <li key={i}>
                            <a href={`${el.anchor}`}>{`${el.name}`}</a>
                        </li>
                    )
                })}

            </SummaryDiv>
        </>
    )
}