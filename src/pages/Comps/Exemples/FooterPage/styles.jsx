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

    padding: 1.313rem 0.5rem 0.5rem;
    margin-top: 3.125rem;
    margin-bottom: 2.125rem;
    text-align: center;
    background-color: #96b060;
    
    a {
        color: black;
    }
    
    > span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        max-width: 463px;
        width: 95%;
        margin: 0 auto;
    }
    
    #about {
        width: 163px;
        text-align: left;

        p:first-child {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
        }
    }
    
    #contactUs {
        align-self: flex-start;
        text-align: left;

        :before{
            content:attr(aria-label);
            font-size: 1.25rem;
        }

        li {
            font-size: 0.875rem;
        }

        li:first-child {
            margin-top: 0.75rem;
        }

        li:hover {
            font-style: italic;
            font-weight: bold;
        }
    }
    
    span span {
        width: 100%;
    }
    
    span > p:last-child {
        margin: 2.25rem auto 0;
        align-self: center;
    }
`