import styled from 'styled-components'

export const List = styled.ul`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.625rem;

    .card {

        /* max-width: 300px; */
        max-width: 270px;
        width: 100%;
        margin: 10px;
        border-radius: 5px;
        border: 1px solid #A3A3A3;
        overflow: hidden;
        text-align: center;
        transition: .4s ease;

        :hover {
            transform: scale(1.05);
        }

        a {
            display: flex;
            flex-direction: column;
            height: 100%;
            user-select: none;

            > div:first-child {

                /* width: 90%; */
                align-self: center;
                flex: 1;
                padding: 0.625rem;
                /* background-color: #F8F8F8; */

                img {
                    object-fit: contain;
                }
            }
        }

        p {
            font-size: 1.125rem;
            padding: 0.625rem 0;
            background-color: #D9D9D9;
        }
    }

    /* #comp1 {

        img {
            object-fit: none;
        }
    } */
`