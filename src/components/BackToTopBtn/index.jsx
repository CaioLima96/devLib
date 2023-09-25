import React, { useState } from "react";

import { Div } from './styles'

import ArrowUp from '../../assets/img/icon/arrowUp1.png'
import ImgContainer from "../ImgContainer";

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
               
                <ImgContainer src={ArrowUp}/>
                
            </Div>

        </>
    )
}