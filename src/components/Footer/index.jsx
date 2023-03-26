import React from "react";

import GithubIcon from '../../assets/img/icon/githubIcon.png'
import LinkedinIcon from '../../assets/img/icon/linkedinIcon.png'


export default function FooterComp() {

    return(

        <footer>

            <p>Developed by: Caio Vieira Lima</p>

            <ul>
                <li>
                    <a href="https://github.com/CaioLima96">
                        <img src={GithubIcon} alt='Github icon'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/caiovieiralima/">
                        <img src={LinkedinIcon} alt='Linkedin icon'/>
                    </a>
                </li>
            </ul>

        </footer>
    )
}