import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    html, body, #root {
        width: 100%;
        height: 100%;
    }

    #root {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #openModalBtn {
        display: flex;
        justify-content: flex-start;
        font-size: 1rem;
        margin-bottom: 2.125rem;
        background-color: #7981C7;

        :hover {
            cursor: pointer;
        }
    }

    #codeBody {

        pre {
            font-size: 14px; 
            /* line-height: 16px; */
            font-family: arial;
            text-align: left;
            padding: 1rem;
            overflow: auto;
            color: #f7f7f7;
        }
    }

    
`