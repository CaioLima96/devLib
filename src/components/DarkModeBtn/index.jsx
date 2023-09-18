import React, { useState } from 'react';
import { GlobalStyle } from './styles';

export default function DarkModeBtn() {

    const [isTheme, setTheme] = useState('light');

    let body = document.body;
    
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
                    </>
                    : 
                    <>
                        <p>Light Mode</p> 
                    </>
                }

            </li>
        </>
    );
}