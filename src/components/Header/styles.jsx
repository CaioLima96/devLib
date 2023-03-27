import styled from 'styled-components'


export const Header = styled.header`

    background-color: wheat;

    nav {
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

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

        #headerNavMenu {

            display: flex;
            flex-wrap: wrap;
            font-size: 1rem;
            text-transform: uppercase;

            li {
                padding: 1rem;
                font-weight: bold;
            }

            li:hover {
                cursor: pointer;
                background-color: black;
            }

            li:hover a, #headerNavMenu li:hover p{
                color: #5391ED;
            }
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
    }
`   