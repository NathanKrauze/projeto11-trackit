import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HabitsPage from './pages/HabitsPage/HabitsPage';
import TodayPage from './pages/TodayPage/TodayPage';
import HistoricPage from './pages/HistoricPage/HistoricPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/hoje' element= {<LoginPage />} />
        <Route path='/cadastro' element= {<SignUpPage />} />
        <Route path='/habitos' element= {<HabitsPage />} />
        <Route path='/' element= {<TodayPage />} />
        <Route path='/historico' element= {<HistoricPage />} />
      </Routes>
    </BrowserRouter>
  )
}

