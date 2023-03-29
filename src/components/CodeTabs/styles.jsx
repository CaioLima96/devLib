import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    .codeTabListTab {
                
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 30px;
        border-radius: 5px 5px 0 0;
        font-size: 1rem;
    }

    .notSelected {
        background-color: rgb(77 77 77);
        color: gainsboro;
    }

    .selected {
        color: white;
        background-color: #1E1E1E;
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

        .notSelected {
            background-color: rgb(77 77 77);
            color: gainsboro;
        }

        .selected {
            color: white;
            background-color: #1E1E1E;
        }

        .codeTabListTab:nth-child(2) {
            margin: 0 5px
        }
    }
`