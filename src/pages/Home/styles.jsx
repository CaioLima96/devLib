import {createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    .navMenu {
        margin-bottom: 0px !important;
    }

    main {

        text-align: center;

        h1 {
            font-size: 3.5rem;
            font-weight: 600;
            margin-bottom: 5.625rem
        }

        #startBtn {
            padding: 16px 33px;
            background-color: rgb(155 183 95);
            font-size: 1.625rem;
            color: black;
        }
    }

    .darkMode main h1 {
        color: white;
    }
`

