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
            /* color: gainsboro; */
            color: #d3d3d3;
        }

        .selected {
            color: white;
            background-color: #1E1E1E;
        }

        .chakra-tabs__tab:nth-child(2), .chakra-button:nth-child(2) {
            margin: 0 5px
        }

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

    

    /* ========= Modal Background =========*/

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
}

.modal::-webkit-scrollbar {
  width: 0;
  background: transparent;
}



/* ========= Modal Body =========*/

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
}

.closeModalBtn:hover, .closeModalBtn:focus {
  text-decoration: none;
  cursor: pointer;
}

.modalHeader {
  padding: 0 0.75rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--grey3);
  text-align: right;
}

.modalFooter {
  padding: 2px 16px;
  color: white;
}

.modalContent #containerList, .modalContent #ideasList {
  margin: 0 auto;
  max-width: none
}

.modalContent #listMenu > button:last-child {
  display: none;
}

.modalContent #ideasList li {
  color: black !important;
}

.modalHeader #listMenu {
  display: flex;
}

/* ========================= @MEDIA ========================= */

@media (max-width: 699px) {

  .modalContent #ideasList li {
      width: 100% !important;
  }
}
`