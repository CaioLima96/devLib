import styled from 'styled-components'


export const Div = styled.div`

    position: fixed;
    bottom: 20px;
    right: 24px;

    font-size: 18px;
    border: none;
    outline: none;
    cursor: pointer;

    padding: 10px 12px;
    border-radius: 50%;
    background-color: white;
    color: black;
    box-shadow: 0px 0px 7px -3px ;
    transition: .5s ease;
    border: 1px solid #c0c0c0;

    :hover {
        background-color: black;
        color: white;
        border-color: black;
    }

    @media (max-width: 850px) {

        #backToTopButton {
            bottom: 9px;
            right: 10px;
            background-color: red;
        }
    }
`