import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

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

    .modal {

        display: none;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.4);
        line-height: normal;

        .modal::-webkit-scrollbar {
            width: 0;
            background: transparent;
        }

        .modalBody {
            max-width: 1140px;
            width: 90%;
            overflow: hidden;

            position: relative;
            background-color: #fefefe;
            margin: 1.75rem auto;
            border-radius: 0.3rem;

            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
            -webkit-animation-name: animatetop;
            -webkit-animation-duration: 0.4s;
            animation-name: animatetop;
            animation-duration: 0.4s
        }

        /* Animation */
        @-webkit-keyframes animatetop {
            from {top:-300px; opacity:0} 
            to {top:0; opacity:1}
        }

        @keyframes animatetop {
            from {top:-300px; opacity:0}
            to {top:0; opacity:1}
        }

        .closeModalBtn {
            color: black;
            font-size: 28px;
            font-weight: bold;

            :hover, :focus {
                text-decoration: none;
                cursor: pointer;
            }
        }

        .modalHeader {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.25rem;
            padding: 0.25rem 0.75rem;
            margin-bottom: 1rem;
            border-bottom: 1px solid #cecece;
        }

        .modalContent {
            margin: 2.5rem auto;
            padding: 0 0.75rem;
        }

        .modalFooter {
            padding: 0.313rem 0.75rem;
            font-size: 0.813rem;
            border-top: 1px solid #cecece;
            text-align: center;
        }
    }
`