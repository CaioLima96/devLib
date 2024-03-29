import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.css'
import './styles/darkMode.css'

import Layout from "./components/Layout";
import Home from './pages/Home'
import Comps from "./pages/Comps";

// import CommingSoon from "./components/ComingSoon";
import BackToTopBtnPage from "./pages/Comps/Exemples/BackToTopBtnPage";
import LoadingPage from "./pages/Comps/Exemples/LoadingPage";
import MainPage from "./pages/Comps/Exemples/MainPage";
import ModalPage from "./pages/Comps/Exemples/ModalPage";
import NavBarPage from "./pages/Comps/Exemples/NavBarPage";
import FooterPage from "./pages/Comps/Exemples/FooterPage";
import SummaryPage from "./pages/Comps/Exemples/SummaryPage";
import DarkModePage from "./pages/Comps/Exemples/DarkModePage";
import CardsPage from "./pages/Comps/Exemples/CardsPage";


function App() {
    
    return (
        <>
            <BrowserRouter>

                <Layout>

                    <Routes>

                        <Route path="" element={<Home/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/components" element={<Comps/>}/>

                        <Route path="/components/backtotopbtn" element={<BackToTopBtnPage/>}/>
                        <Route path="/components/darkmode" element={<DarkModePage/>}/>
                        <Route path="/components/main" element={<MainPage/>}/>
                        <Route path="/components/modal" element={<ModalPage/>}/>
                        <Route path="/components/loading" element={<LoadingPage/>}/>
                        <Route path="/components/footer" element={<FooterPage/>}/>
                        <Route path="/components/navbar" element={<NavBarPage/>}/>
                        <Route path="/components/summary" element={<SummaryPage/>}/>
                        <Route path="/components/cards" element={<CardsPage/>}/>

                    </Routes>

                </Layout>

            </BrowserRouter>

        </>
    );
}

export default App;
