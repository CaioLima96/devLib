import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    html, body, #root {
        width: 100%;
        height: 100%;
    }

    #root {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h1 {
        text-align: center;
    }
`