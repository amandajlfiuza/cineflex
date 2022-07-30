import './App.css';
import Navbar from '../Navbar/Navbar';
import ChooseMovieScreen from '../ChooseMovieScreen/ChooseMovieScreen';
import ChooseSessionScreen from '../ChooseSessionScreen/ChooseSessionScreen';
import ChooseSeatsScreen from '../ChooseSeatsScreen/ChooseSeatsScreen';
import SuccessScreen from '../SuccessScreen/SuccessScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

export default function App() {
    return (
        <div className='app' >
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<ChooseMovieScreen />} />
                    <Route path='/sessoes/:idFilme' element={<ChooseSessionScreen />} />
                    <Route path='/assentos/:idSessao' element={<ChooseSeatsScreen />} />
                    <Route path='/sucesso' element={<SuccessScreen />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}