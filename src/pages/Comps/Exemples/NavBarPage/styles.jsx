import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    .navMenu {

        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2.125rem;

        > div:first-child {

            margin-left: 0.625rem;

            .navMenuLogo {

                a {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    font-size: 1.563rem;
                    color: black;

                    div {
                        margin-right: 0.438rem
                    }

                    p:hover {
                        font-style: italic;
                    }
                }
            }

            > div:last-child {
                display: none;
            }
        }

    }

    .navMenuList {
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
    text-transform: uppercase;

    li {
        /* padding: 1rem; */
        font-weight: bold;
    }

    a {
        padding: 1rem;
        display: inline-block;
    }

    li:hover {
        cursor: pointer;
        background-color: black;
    }

    li:hover a, li:hover p{
        color: #96b060;
    }
    }

    @media (max-width: 600px) {

        .navMenu {

            position: relative;

            > div:first-child {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 0.625rem;
                margin-left: 0;

                > div:last-child {
                    display: block;
                }
            }
        }

        .navMenuList {
            display: none;
            width: 100%;
            padding: 0.625rem 0;
            background-color: #333333 !important;
            position: absolute;
            top: 98%;
            z-index: 3;
            
            a {
                color: white;
            }
        }

        .hideShowNavMenu {
            display: block !important;
        }
    }

`