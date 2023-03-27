import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.css'

import Layout from "./components/Layout";
import Home from './pages/Home'
import Comps from "./pages/Comps";

import BackToTopBtn from "./pages/Comps/Exemples/BackToTopBtn";
import ModalPage from "./pages/Comps/Exemples/ModalPage";
import NavBarPage from "./pages/Comps/Exemples/NavBarPage";


function App() {
    
    return (
        <>
            <BrowserRouter>

                <Layout>

                    <Routes>

                        <Route path="" element={<Home/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/components" element={<Comps/>}/>

                        <Route path="/components/backtotopbtn" element={<BackToTopBtn/>}/>
                        <Route path="/components/modal" element={<ModalPage/>}/>
                        <Route path="/components/navbar" element={<NavBarPage/>}/>

                    </Routes>

                </Layout>

            </BrowserRouter>

        </>
    );
}

export default App;
