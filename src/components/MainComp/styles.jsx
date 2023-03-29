import styled from 'styled-components'

export const Main = styled.main`

    width: 90%;
    max-width: 960px;
    margin: 5rem auto;
    /* text-align: center; */

    border: 1px solid red;

    ${props => (props.to ? `
        > a:first-child p {
                font-size: 0.75rem;
                margin: 0 0 1.313rem 0.375rem;
                text-align: left;

            }
    `
    : '')}
`
