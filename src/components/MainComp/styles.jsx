import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    .darkMode {

        main > a:first-child {

            img {
                filter: brightness(0) invert(1);
            }
        }
    }
`

export const Main = styled.main`

    width: 90%;
    max-width: 960px;
    margin: 5rem auto;

    ${props => (props.to ? `
        > a:first-child { 
            display: flex;
            align-items: center;
            margin: 0.375rem 0 1.313rem 0.625rem;

            > div {
                width: 10px;
                height: 10px;
                margin-right: 0.313rem;
            }

            p {
                font-size: 0.875rem;
                text-align: left;
            }

            p:hover {
                font-style: italic;
            }
        }
    `
    : '')}
`
