import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.css'

import Layout from "./components/Layout";
import Home from './pages/Home'
import Comps from "./pages/Comps";

import BackToTopBtn from "./components/CompsPage/BackToTopBtn";
import ModalPage from "./components/CompsPage/ModalPage";
import NavBarPage from "./components/CompsPage/NavBarPage";


function App() {
    
    return (
        <>
            <BrowserRouter>

                <Layout>

                    <Routes>

                        <Route path="" element={<Home/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/components" element={<Comps/>}/>

                        <Route path="/backtotopbtn" element={<BackToTopBtn/>}/>
                        <Route path="/modal" element={<ModalPage/>}/>
                        <Route path="/navbar" element={<NavBarPage/>}/>

                    </Routes>

                </Layout>

            </BrowserRouter>

        </>
    );
}

export default App;
