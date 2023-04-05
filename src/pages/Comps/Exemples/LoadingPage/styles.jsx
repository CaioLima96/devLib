import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    .loading {
        width: 180px;
        margin: 4.125rem auto;
        text-align: center;
        user-select: none;

        p {
            margin-top: 1rem;
            font-size: 1.5rem;
        }
    }

    .rotate {
        animation: rotation 2.5s infinite linear;
    }

    @keyframes rotation {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(359deg);
        }
    }
`