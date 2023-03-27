import styled from 'styled-components'

export const Footer = styled.footer `

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.5rem;
    background-color: wheat;

    p {
        margin-right: 0.75rem;
        font-size: 0.875rem;
    }

    ul {

        display: flex;
        justify-content: space-between;
        align-items: center;

        li:not(li:last-child) {
            margin-right: 0.375rem;
        }
    }
`

