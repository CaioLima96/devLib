import React, { useState } from 'react';

import ImgContainer from '../ImgContainer';
import { GlobalStyle } from './styles';

import MoonIcon from '../../assets/img/icon/moon3.png'
import SunIcon from '../../assets/img/icon/sun1.png'

export default function DarkModeBtn() {

    const [isTheme, setTheme] = useState('light');

    let body = document.body;
    // console.log(body.classList)
    
    const toggleDarkMode = () => {

        if (isTheme === 'light') {

            setTheme('dark');
            body.classList = 'darkMode'

        } else {

            setTheme('light');
            body.classList = ''
        }
    }

    return (
        <>
            <GlobalStyle/>
            
            <li className='darkModeBtn' onClick={toggleDarkMode}>

                {isTheme == 'light' ? 
                    <>
                        <p>Dark Mode</p> 
                        {/* <ImgContainer src={MoonIcon} style={{ width: '20px' }}/> */}
                    </>
                    : 
                    <>
                        <p>Light Mode</p> 
                        {/* <ImgContainer src={SunIcon} style={{ width: '20px' }}/> */}
                    </>
                }

            </li>
        </>
    );
}