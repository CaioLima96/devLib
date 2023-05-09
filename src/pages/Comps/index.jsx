import React, { useRef }  from "react";
import { Link } from "react-router-dom";
import MainComp from "../../components/MainComp";
import ImgContainer from "../../components/ImgContainer";
import CodeContainer from "../../components/CodeContainer";
import CopyButton from "../../components/CopyButton";

import { GlobalStyle, List } from './styles'

import Data from '../../data/data'

export default function Comps() {

    let copyResetCss = useRef()

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
                
                <CodeContainer>

                    <p>To use these components, you will need a reset css. Use the one provided below</p>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between', 
                        backgroundColor:'#1E1E1E',
                        margin: '10px 0',
                        borderRadius: '5px'
                    }}>

<pre ref={copyResetCss}>{
`*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}`
}</pre>

                        <CopyButton copyRef={copyResetCss} alignSelf={'self-start'} style={{ marginLeft: '0.625rem', marginTop: '0.5rem'}}/>

                    </div>

                </CodeContainer>

                {/* <p style={{fontSize:'26px'}}>Components</p> */}

                <List>

                    {getData()}

                </List>

            </MainComp>
        </>
    )
}