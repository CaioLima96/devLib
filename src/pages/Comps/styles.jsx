import styled from 'styled-components'

export const List = styled.ul`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.625rem;

    .card {

        max-width: 300px;
        width: 100%;
        margin: 10px;
        border-radius: 5px;
        border: 1px solid #A3A3A3;
        overflow: hidden;
        text-align: center;

        a {
            
            > div:first-child {

                background-color: #F8F8F8;

                img {
                    object-fit: scale-down;
                }
            }
        }

        p {
            font-size: 1.125rem;
            padding: 0.625rem 0;
            background-color: #D9D9D9;
        }
    }

`