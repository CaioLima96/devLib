import React from "react";

import ImgContainer from "../ImgContainer";
import { Footer } from './styles'

import GithubIcon from '../../assets/img/icon/githubIcon.png'
import LinkedinIcon from '../../assets/img/icon/linkedinIcon.png'


export default function FooterComp(props) {

    return (

        <Footer>

            <span>

                <div id="about">

                    <p>About</p>

                    <p>I created this website to gather in one place the codes I usually use, in addition to helping anyone who wants a ready-made component.</p>

                </div>

                <ul id="contactUs" aria-label="Contact Us:">

                    <li >
                        <a href="https://www.linkedin.com/in/caiovieiralima" target="_blank">Linkedin</a>
                    </li>
                    <li >
                        <a href="https://github.com/CaioLima96" target="_blank">Github</a>
                    </li>
                </ul>

                <span></span>

                <p>Developed by: Caio Vieira Lima</p>

            </span>

        </Footer>
    )
}