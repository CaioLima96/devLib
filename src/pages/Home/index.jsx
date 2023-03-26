import React from "react";

import MainComp from "../../components/MainComp";


export default function Home() {

    return (

        <MainComp>

            <h1>Components made to help you build your websites!</h1>

            <button id="startBtn" className="defaultBtn">

                <a href="./resources/pages/exemples.html">
                    Start
                </a>

            </button>

        </MainComp>
    )
}