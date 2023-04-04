import React from "react";

import ImgContainer from "../ImgContainer";
import { Footer } from './styles'

import GithubIcon from '../../assets/img/icon/githubIcon.png'
import LinkedinIcon from '../../assets/img/icon/linkedinIcon.png'


export default function FooterComp(props) {

    return(

        <Footer onClick={props.onClick}>

            <p>Developed by: Caio Vieira Lima</p>

            <ul>
                <li>
                    <a href="https://github.com/CaioLima96">
                        <ImgContainer src={GithubIcon} alt={'Github icon'} style={{width: '16px'}}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/caiovieiralima/">
                        <ImgContainer src={LinkedinIcon} alt={'Linkedin icon'} style={{width: '16px'}}/>
                    </a>
                </li>
            </ul>

        </Footer>
    )
}