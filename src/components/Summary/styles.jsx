import styled from 'styled-components'


export const SummaryDiv = styled.div`

    display: inline-block;
    text-align: left;
    border: 1px solid black;
    border-radius: 0.125rem;
    padding: 0.938rem 0.813rem 0.938rem;
    margin-bottom: 3.125rem;
    box-shadow: 4px 4px 0px -1px rgb(0 0 0 / 75%);
    
    p{
        font-size: 1.375rem;
        margin-bottom: 0.625rem;
        font-weight: 500;
    }

    li {
        list-style: inside !important;

        :not(li:last-child) {
            margin-bottom: 0.313rem;
        }

        a {
            font-size: 0.875rem;
            margin-bottom: 0.313rem;
            font-style: normal;
            color: black;
            text-decoration: none;
        }
        
        a:hover {
            text-decoration: underline;
        }
    }
`