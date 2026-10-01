import React from 'react';
import App from './pages/app/App.jsx';
import Contato from './pages/contato/index.jsx'
import Contador from './pages/contador/index.jsx';
import Loco from './pages/Loco/index.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Rotear() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/contato' element={<Contato />} />
                    <Route path='/contador' element={<Contador/>}/>
                    <Route path='/loco' element={<Loco/>}/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}
