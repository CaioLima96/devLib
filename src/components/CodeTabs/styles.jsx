import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    .codeTabListTab {
                
        /* display: flex;
        align-items: center;
        justify-content: center; */
        width: 70px;
        height: 30px;
        border-radius: 5px 5px 0 0;
        font-size: 1rem;

        align-self: flex-end;
    }

    .notSelected {
        background-color: rgb(77 77 77);
        color: gainsboro;
    }

    .notSelected:hover {
        height: 40px !important;
    }

    .selected {
        color: white;
        background-color: #1E1E1E;
        height: 40px !important;
    }

    .codeTabListTab:nth-child(2) {
        margin: 0 5px
    }

    #codeBody {

        /* .chakra-tabs__tab, .chakra-button,  */
        .codeTabListTab {
            
            display: flex;
            align-items: center;
            justify-content: center;
            width: 70px;
            height: 30px;
            border-radius: 5px 5px 0 0;
            font-size: 1rem;
        }

        .codeTabListTab:nth-child(2) {
            margin: 0 5px
        }

        .chakra-tabs__tab-panel {
            display: flex;
            flex-direction: column;
            padding: 0 0.313rem;
        }
    }
`