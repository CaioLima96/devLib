import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'


export const GlobalStyle = createGlobalStyle`

    #loadingCard {
        
        div {
            animation: rotation 2.5s infinite linear;
        }
    }

    @keyframes rotation {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(359deg);
        }
    }   
`

export const List = styled.ul`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.625rem;

    .card {

        max-width: 270px;
        width: 100%;
        height: 250px;
        margin: 10px;
        border-radius: 5px;
        border: 1px solid #A3A3A3;
        overflow: hidden;
        text-align: center;
        transition: .4s ease;

        :hover {

            transform: scale(1.05);

            a {
                color: black !important;
            }

            p {
                background-color: rgb(150, 176, 96);
            }
        }

        a {
            display: flex;
            flex-direction: column;
            height: 100%;
            user-select: none;
            color: black;

            > div:first-child {
                align-self: center;
                flex: 1;
                padding: 0.625rem;
                height: 206px;

                img {
                    object-fit: contain;
                }
            }
        }

        a:visited {
            color: #6036f3;
        }

        p {
            font-size: 1.125rem;
            padding: 0.625rem 0;
            background-color: #D9D9D9;
        }
    }

    #loadingCard {
        
        .imgContainer {
            max-width: 200px !important;
        }
    }
`