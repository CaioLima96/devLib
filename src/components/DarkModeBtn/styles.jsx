import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    .darkModeBtn {
        display: flex;
        align-items: center;
        padding: 16px;

        p {
            /*margin-right: 5px;*/
            pointer-events: none;
        }

        /*:hover img {
            filter: invert(70%) sepia(13%) saturate(1166%) hue-rotate(38deg) brightness(93%) contrast(89%);
        }*/
    }
`

