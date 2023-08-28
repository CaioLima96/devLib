import React from "react";

import HeaderComp from "../Header";
import FooterComp from "../Footer";

export default function Layout(props) {

    // function closeNavBar() {

    //     let headerNavMenu = document.getElementById("headerNavMenu")
    //     headerNavMenu.classList.remove('hideShowHeaderNavMenu')
    // }

    return (
        <>
            <HeaderComp/>
                { props.children }
            <FooterComp 
            // onClick={closeNavBar}
            />
        </>
    )
}