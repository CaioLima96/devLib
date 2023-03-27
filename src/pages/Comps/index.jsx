import React from "react";
import MainComp from "../../components/MainComp";
import ImgContainer from "../../components/ImgContainer";

import { List } from './styles'

import Teste from '../../assets/img/teste.png'

export default function Comps() {

    return (

        <MainComp>

            <List>

                <li className="card">
                    <ImgContainer src={Teste} alt={'teste'}/>
                    <p>Modal</p>
                </li>

                <li className="card">
                    <ImgContainer src={Teste} alt={'teste'}/>
                    <p>Navbar</p>
                </li>

                <li className="card">
                    <ImgContainer src={Teste} alt={'teste'}/>
                    <p>Back to Top Btn</p>
                </li>

            </List>

        </MainComp>
    )
}