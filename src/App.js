import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.css'

import Layout from "./components/Layout";
import Home from './pages/Home'
import Comps from "./pages/Comps";

function App() {
    return (
        <>
            <BrowserRouter>

                <Layout>

                    <Routes>

                        <Route path="" element={<Home/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/components" element={<Comps/>}/>

                    </Routes>

                </Layout>

            </BrowserRouter>

        </>
    );
}

export default App;
