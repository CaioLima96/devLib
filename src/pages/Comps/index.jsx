import React, { useRef }  from "react";
import { Link } from "react-router-dom";

import MainComp from "../../components/MainComp";
import ImgContainer from "../../components/ImgContainer";
import CodeContainer from "../../components/CodeContainer";
import CopyButton from "../../components/CopyButton";
import DownloadBtn from '../../components/DownloadBtn'

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

                    <p>To use these components, you will need a reset css and some icons. Use the ones provided below.</p>

                    <div 
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            marginTop: '5px'
                        }}
                    >
                        <p style={{marginRight: '6px'}}>You can download the icons </p>
                        <DownloadBtn/>
                    </div>

                    <div  className="preContainer">

<pre ref={copyResetCss}>{
`*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.imgContainer {
    line-height: 0%;
}

.imgContainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}`
}</pre>

                        <CopyButton copyRef={copyResetCss} alignSelf={'self-start'} style={{ marginLeft: '0.625rem', marginTop: '0.5rem'}}/>

                    </div>

                </CodeContainer>

                <List>

                    {getData()}

                </List>

            </MainComp>
        </>
    )
}