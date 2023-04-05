import React from "react";
import { Link } from "react-router-dom";
import MainComp from "../../components/MainComp";
import ImgContainer from "../../components/ImgContainer";

import { GlobalStyle, List } from './styles'

import Data from '../../data/data'

export default function Comps() {

    function getData() {

        return Data.map(item => {

            return (
                
                <li key={item.id} id={item.id} className='card'>

                    <Link to={item.linkTo}>

                        <ImgContainer src={item.src} alt={item.name} />
                        <p>{item.name}</p>

                    </Link>

                </li>
        )
        })
    }

    return (

        <>
            <GlobalStyle/>
            
            <MainComp>

                {/* <p style={{fontSize:'26px'}}>Components</p> */}

                <List>

                    {getData()}

                </List>

            </MainComp>
        </>
    )
}