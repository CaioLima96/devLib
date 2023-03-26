import React from "react";

import HeaderComp from "../Header";
import FooterComp from "../Footer";

export default function Layout(props) {

    return (
        <>
            <HeaderComp />
                { props.children }
            <FooterComp/>
        </>
    )
}