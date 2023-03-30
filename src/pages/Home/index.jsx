import React from "react";
import { Link } from "react-router-dom";
import { GlobalStyle } from "./styles";

import MainComp from "../../components/MainComp";


export default function Home() {

    return (

        <>
            <GlobalStyle/>

            <MainComp>

                <h1>Components made to help you build your websites!</h1>

                <Link to='/components'>
                    <button id="startBtn" className="defaultBtn">

                        Start

                    </button>
                </Link>

            </MainComp>
        </>
    )
}