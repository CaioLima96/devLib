import React, { useRef, useEffect } from "react";

import { Div } from './styles'

export default function BackToTopBtn () {

    //Get the button
    // let backTopBtn = document.getElementById("backToTopButton");

    // When the user scrolls down 20px from the top of the document, show the button
    // window.onscroll = function () { scrollFunction() };

    // function scrollFunction() {

    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         bttbRef.style.display = "block";
    //     } else {
    //         bttbRef.style.display = "none";
    //     }
    // }


    // let bttbRef = useRef(null)

    // useEffect(() => {

    //     const scrollFunction = event => {

    //         if (event.target.body.scrollTop > 20 || event.target.documentElement.scrollTop > 20) {
    //             bttbRef.style.display = "block";
    //         } else {
    //             bttbRef.style.display = "none";
    //         }

    //     }

    //     window.addEventListener('onscroll', scrollFunction)

    //     return () => {
    //         window.removeEventListener('click', scrollFunction);
    //     };

    // })

    // // When the user clicks on the button, scroll to the top of the document
    // function topFunction() {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }

    // https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/

    return (
        <>
        
            <Div id="backToTopButton" title="Back to top" 
            // ref={bttbRef} 
            // onClick={topFunction}
            >

                <div>

                    <i class="fas fa-arrow-up"></i>

                </div>

            </Div>
        
        </>
    )
}