import {createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    .navMenu {
        margin-bottom: 0px !important;
    }

    main {

        text-align: center;

        margin: 9.375rem auto !important;

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
            margin-bottom: 1rem;
        }
    }

    .darkMode main h1 {
        color: white;
    }

    @media (max-width: 359px) {

        main h1 {
            font-size: 46px;
        }
    }
`