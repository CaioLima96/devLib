import React, { useState } from "react";

import { Div } from './styles'

export default function BackToTopBtn() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 20) {
            setVisible(true)
        }
        else if (scrolled <= 20) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>

            <Div id="backToTopButton" title="Back to top"
                onClick={scrollToTop} 
                style={{display: visible ? 'block' : 'none'}}
            >

                <div>
                    <i className="fas fa-arrow-up"></i>
                </div>

            </Div>

        </>
    )
}