import styled from 'styled-components'

export const CodeDiv = styled.div`

    width: 94%;
    margin: 0 auto;
    padding-bottom: 2.063rem;

    #codeHeader {
        text-align: left;
        margin-bottom: 4.375rem;

        p {
            margin-bottom: 0.625rem;
            font-size: 1.875rem;
        }

        hr {
            border-color: black;
        }
    }

    #codeBody {

        /* .copyBtn {
            align-self: end;
            margin: 0.75rem 0.75rem 0 0;
            background-color: #A4A709;
            line-height: 1;
            font-size: 0.875rem;
        } */
        
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