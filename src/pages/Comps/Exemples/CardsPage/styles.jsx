import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Retangulo1 from '../../../../assets/img/retangulo1.jpg'


export const GlobalStyle = createGlobalStyle`

`

export const SimpleRectangleCard = styled.li`

    width: 202px;
    list-style: none;
    margin-right: 2%;
    margin-bottom: 2%;


    > div:first-child {
        width: 100%;
        height: 248px;
        padding: 0.625rem;

        background-image: url(${Retangulo1});
        background-size: contain;
        background-repeat: no-repeat;
        background-color: black;

        overflow: hidden;

        img {
            object-fit: contain !important;
        }
    }

    .cardDescription {
        text-align: center;
        font-size: 1.25rem;
    }

    .cardDescription a {
        color: black;
    }

    .cardDescription a:hover {
        font-style: italic;
    }

    .cardDescription p {
        margin: 0.5rem 0;
        pointer-events: none;
        display: inline-block;
    }

    @media (min-width: 1024px) {
        
        > div:first-child:hover {
            transition: 1s all;
            transform: scale(1.2);
            z-index: 5 !important;
        }    
    }
`