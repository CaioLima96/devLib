import styled from 'styled-components'

export const Footer = styled.footer`
    
    padding: 1.313rem 0.5rem 0.5rem;
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

        span {
            width: 100%;
        }

        > p:last-child {
            margin: 2.25rem auto 0;
            align-self: center;
            font-size: 0.813rem;
        }
    }

    #about {

        width: 163px;
        text-align: left;
        
        p:first-child {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
        }

        p:last-child {
            font-size: 0.875rem;
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

        li:hover {
            font-style: italic;
            font-weight: bold;
        }

        li:first-child {
            margin-top: 0.75rem;
        }
    }
`

