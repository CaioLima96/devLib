import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`

`

export const Footer1 = styled.div `

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.5rem;
    background-color: #96b060;

    margin-bottom: 2.125rem;

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

export const Footer2 = styled.div `

    padding: 1.313rem 0 0.5rem;
    background-color: #96b060;
    text-align: center;
    margin: 4.375rem 0 2.125rem;

    a:hover {
        font-weight: bold;
        font-style: italic;
        color: black;
    }

    ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        
        max-width: 95%;
        width: 463px;
        margin: 0 auto 2.25rem;

        li p:first-child {
            margin-bottom: 0.75rem;
            font-size: 1.25rem;
        }

        li:not(p:first-child) {
            font-size: 0.875rem;
        }
    }

    #about {
        width: 163px;
        text-align: left;
    }

    #contactUs {
        display: flex;
        flex-direction: column;
    }

    #contactUs a {
        text-align: left;
    }

    > p:last-child {
        font-size: 0.813rem;
    }

`