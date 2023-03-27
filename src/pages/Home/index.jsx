import React from "react";
import { Link } from "react-router-dom";
import { GlobalStyle } from "./styles";

import MainComp from "../../components/MainComp";


export default function Home() {

    return (

        <>
            <GlobalStyle page={'home'} />

            <MainComp>

                <h1>Components made to help you build your websites!</h1>

                <button id="startBtn" className="defaultBtn">

                    <Link to='/components'>Start</Link>

                </button>

            </MainComp>
        </>
    )
}