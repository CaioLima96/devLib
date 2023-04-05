import React from "react";
import { ImgDiv } from './styles'

export default function ImgContainer(props) {

    return(

        <ImgDiv {...props} className={props.rotate ? 'imgContainer rotate' : 'imgContainer'}>
            <img src={props.src} alt={props.alt}/>
        </ImgDiv>
    )
}