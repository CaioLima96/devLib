import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    .darkModeBtn2 {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 1rem;

        width: 149px;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: bold;

        border: 1px solid black;

        margin-bottom: 2.5rem;
    }

    .darkModeBtn2:hover {
        background-color: black;
    }

    .darkModeBtn2:hover p {
        color: #96B060;
    }

    .darkModeBtn2 p {
        margin-right: 5px;
        pointer-events: none;
    }

    .darkModeBtn2 div:nth-child(2){
        position: relative;
        transform-style: preserve-3d;
        transition: all 2s cubic-bezier(0.175, 0.885,0.32,1.265);
        height: 20px;
        width: 20px;
    }

    .darkModeBtn2 .imgContainer {
        width: 20px;
        height: 20px;
    }

    .dmMoon, .dmSun {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    }

    .dmMoon {
        display: inline-block;
    }

    .dmSun {
        display: inline-block;
        transform: rotateY(-180deg);
        -webkit-backface-visibility: hidden; 
        backface-visibility: hidden;
    }

    .toggleSunMoon {
        transform: rotateY(180deg);
    }

    .darkMode {
        background-color: #202020;
    }
`