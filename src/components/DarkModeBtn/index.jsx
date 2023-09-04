import React, { useRef, useEffect, useState } from 'react';

export default function DarkModeBtn() {

    const [theme, setTheme] = useState('light');

    let ruti = document.getElementById('root')
    console.log(ruti.classList)
    
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            ruti.classList.add('darkMode')
            console.log('dark')
        } else {
            setTheme('light');
            ruti.classList.remove('darkMode')
            console.log('light')
        }
    };

    return (
        <div onClick={toggleTheme}>
            <p>{theme == 'light' ? 'Dark' : 'Light'}</p>
        </div>
    );
}