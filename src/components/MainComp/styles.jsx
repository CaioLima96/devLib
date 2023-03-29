import styled from 'styled-components'

export const Main = styled.main`

    width: 90%;
    max-width: 960px;
    margin: 5rem auto;
    /* text-align: center; */

    border: 1px solid red;

    ${props => (props.to ? `
        > a:first-child { 
            display: inline-block;
            margin: 0.375rem 0 1.313rem 0.625rem;

            p {
                font-size: 0.875rem;
                text-align: left;
            }
        }
    `
    : '')}
`
