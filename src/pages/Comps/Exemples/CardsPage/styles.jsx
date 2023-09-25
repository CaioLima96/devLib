import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Retangulo1 from '../../../../assets/img/retangulo1.jpg'


export const GlobalStyle = createGlobalStyle`

`

export const SimpleRectangleList = styled.ul`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    li {
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
        }

        @media (min-width: 1024px) {
            
            > div:first-child:hover {
                transition: 1s all;
                transform: scale(1.2);
                z-index: 5 !important;
            }    
        }
    }

    @media (max-width: 505px) {
    
        li {
            width: 251px;
        }   
        
        li > div:first-child {
            height: 308px;
        }
    }
`

export const SimpleSquareList = styled.ul`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.625rem;

    li {
        max-width: 270px;
        width: 100%;
        height: 250px;
        margin: 10px;
        border-radius: 5px;
        border: 1px solid rgb(163, 163, 163);
        overflow: hidden;
        text-align: center;
        transition: all 0.4s ease 0s;

        :hover {
            transform: scale(1.05); 
        }

        a {
            display: flex;
            flex-direction: column;
            height: 100%;
            user-select: none;
            color: black;

            :hover {
                color: black !important;
            }

            :visited {
                color: #6036f3;
            }

            > div:first-child {
                align-self: center;
                flex: 1;
                padding: 0.625rem;
                height: 206px;

                img {
                    object-fit: contain !important;
                }
            }
        }

        p {
            font-size: 1.125rem;
            padding: 0.625rem 0;
            background-color: #D9D9D9;

            :hover {
                background-color: rgb(150, 176, 96);
            }
        }
    }
`

export const RectangleHovDescList = styled.ul`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .rectangleHovDescCard {
        position: relative;
        width: 280px;
        list-style: none;
        margin: 1%;
        border-radius: 0.125rem;
    }

    .rectangleHovDescCard > .imgContainer {
        width: 100%;
        height: 350px;
        overflow: hidden;
        border-radius: 2px;
    }

    .rectangleHovDescCard .cardInfo {
        display: flex;
        justify-content: end;
        align-items: center;
        flex-direction: column;
        padding-bottom: 0.5rem;
        position: absolute;
        top: 76%;
        bottom: 0;
        left: 0;
        right: 0;
        height: 24%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: #96B060;
        border-top-left-radius: 247% !important;
        border-top-right-radius: 247% !important;
    }

    .rectangleHovDescCard:hover .cardInfo {
        opacity: 1;
    }

    .rectangleHovDescCard .cardInfo > div:first-child {
        margin-bottom: 0.125rem;
    }

    .rectangleHovDescCard .cardInfo > div:first-child img {
        width: 20px;
        height: 20px;
        display: inline-flex;
    }
    
    .rectangleHovDescCard .cardInfo > div:first-child img:not(img:last-child) {
        margin-right: 0.313rem;
    }

    .rectangleHovDescCard .cardInfo a {
        color: white;
    }

    .rectangleHovDescCard .cardInfo img:hover, .rectangleHovDescCard .cardInfo a:hover {
        cursor: pointer;
    }

    @media (max-width: 694px) {

        .rectangleHovDescCard:not(.rectangleHovDescCard:last-child) {
            margin-bottom: 0.625rem;
        }
    }
`

export const SquareHovDescList = styled.ul`


    display: flex;
    justify-content: center;
    flex-wrap: wrap;


    .squareHovDescCard {
        max-width: 300px;
        width: 100%;
        overflow: hidden;
        margin: 1%;
        position: relative;
        border-radius: 5px;
    }

    .squareHovDescCard .imgContainer img {
        border-radius: 3px;
    }

    .squareHovDescCard .cardInfo {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        position: absolute;
        font-size: 2rem;
        font-weight: bold;
        text-transform: uppercase;
        top: 0;
        left: 0;
        padding: 0.313rem;
        color: white;
        opacity: 0;
        transition: .5s ease;
        background-color: #000000a1;
        width: 100%;
        height: 100%;
        border-radius: 3px;
    }

    .squareHovDescCard:hover .cardInfo {
        opacity: 1;
    }

    .squareHovDescCard .cardInfo img:not(img:last-child) {
        margin-right: 5px;
    }

    .squareHovDescCard .cardInfo img {
        width: 30px;
        height: 30px;
    }

    .squareHovDescCard .cardInfo p {
        pointer-events: none;
        margin-bottom: 1rem;
    }

    .squareHovDescCard .cardInfo span {
        width: 100%;
    }

    .squareHovDescCard .cardInfo > div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    @media (max-width: 705px) {

        .squareHovDescCard {
            margin: 0 0.313rem 1rem !important;
        }
    }
`