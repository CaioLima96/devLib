import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.css'

import Layout from "./components/Layout";
import Home from './pages/Home'

function App() {
    return (
        <>
            <BrowserRouter>

                <Layout>

                    <Routes>

                        <Route path="" element={<Home />} />
                        <Route path="/home" element={<Home />} />

                    </Routes>

                </Layout>

            </BrowserRouter>

        </>
    );
}

export default App;
