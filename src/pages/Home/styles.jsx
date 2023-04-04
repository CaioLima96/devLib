import {styled, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    /* html, body, #root {
        width: 100%;
        height: 100%;
    }

    #root {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    } */

    main {

        text-align: center;

        h1 {
            font-size: 3.5rem;
            font-weight: 600;
            margin-bottom: 5.625rem
        }

        #startBtn {
            padding: 16px 33px;
            /* background-color: #7fad20; */
            background-color: rgb(155 183 95);
            font-size: 1.625rem;
                color: black;
            /* a {
                font-size: 1.625rem;
                color: black;
            } */
        }
    }
`

