import {createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    header nav {

        position: relative;
    }
`

export const Header = styled.header`

    background-color: #96b060;

    nav {

        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            color: black;
        }

        > div:first-child {

            margin-left: 0.625rem;

            #headerLogo {

                font-size: 1.563rem;

                a {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;

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

    #headerNavMenu {
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

        nav {

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

        #headerNavMenu {
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

        .hideShowHeaderNavMenu {
            display: block !important;
        }
    }
`   