import './App.css';
import Navbar from '../Navbar/Navbar';
import ChooseMovieScreen from '../ChooseMovieScreen/ChooseMovieScreen';
import ChooseSessionScreen from '../ChooseSessionScreen/ChooseSessionScreen';
import ChooseSeatsScreen from '../ChooseSeatsScreen/ChooseSeatsScreen';
import SuccessScreen from '../SuccessScreen/SuccessScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ChooseMovieScreen />} />
                <Route path='/filme' element={<ChooseSessionScreen />} />
                <Route path='/sessao' element={<ChooseSeatsScreen />} />
                <Route path='/sucesso' element={<SuccessScreen />} />
            </Routes>
        </BrowserRouter>
    )
}