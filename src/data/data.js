import Teste from '../assets/img/teste.png'
import Main from '../assets/img/screenshots/main1.png'
import Modal from '../assets/img/screenshots/modal.png'
import BTTBTN from '../assets/img/screenshots/backToTopBtn2.png'
import Loading from '../assets/img/icon/loading.png'
import NavBar from '../assets/img/screenshots/navbarMobile.png'
import Footer from '../assets/img/screenshots/footer.png'
import Summary from '../assets/img/screenshots/summary.png'
import DarkMode from '../assets/img/screenshots/darkModeBtn.png'


export default [

    { id: 'bttbtnCard', name: 'Back to Top Btn', src: `${BTTBTN}`, linkTo: '/components/backtotopbtn'},

    { id: 'darkModeCard', name: 'Dark Mode', src: `${DarkMode}`, linkTo: '/components/darkmode'},

    { id: 'footerCard', name: 'Footer', src: `${Footer}`, linkTo: '/components/footer'},

    { id: 'loadingCard', name: 'Loading', src: `${Loading}`, linkTo: '/components/loading'},

    { id: 'mainCard', name: 'Main', src: `${Main}`, linkTo: '/components/main'},

    { id: 'modalCard', name: 'Modal', src: `${Modal}`, linkTo: '/components/modal'},

    { id: 'navbarCard', name: 'NavBar', src: `${NavBar}`, linkTo: '/components/navbar'},

    { id: 'summaryCard', name: 'Summary', src: `${Summary}`, linkTo: '/components/summary'},

    // { id: 'comp', name: '', src: `${}`, linkTo: '/components/'},
]