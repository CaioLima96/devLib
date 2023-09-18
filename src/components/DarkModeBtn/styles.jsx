import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    .darkModeBtn {
        display: flex;
        align-items: center;
        padding: 16px;

        p {
            pointer-events: none;
        }
    }
`