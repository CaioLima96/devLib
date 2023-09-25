import React from "react";
import { Link } from 'react-router-dom';

import { Div } from './styles'

import Icons from '../../assets/img/icons.rar'

export default function DownloadBtn(props) {

    return (

        <Div>

            &gt;&gt;&gt;
                <Link
                    to={Icons}
                    download="icons"
                    target="_blank"
                    rel="noreferrer"
                >
                    Here
                </Link>
            &lt;&lt;&lt;

        </Div>
    )
}