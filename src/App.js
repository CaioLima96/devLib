import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.css'

import Layout from "./components/Layout";
import Home from './pages/Home'
import Comps from "./pages/Comps";

import BackToTopBtnPage from "./pages/Comps/Exemples/BackToTopBtnPage";
import ModalPage from "./pages/Comps/Exemples/ModalPage";
import LoadingPage from "./pages/Comps/Exemples/LoadingPage";
import CommingSoon from "./components/ComingSoon";


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
                        <Route path="/components/modal" element={<ModalPage/>}/>
                        <Route path="/components/loading" element={<CommingSoon/>}/>
                        <Route path="/components/footer" element={<CommingSoon/>}/>
                        <Route path="/components/navbar" element={<CommingSoon/>}/>

                    </Routes>

                </Layout>

            </BrowserRouter>

        </>
    );
}

export default App;
