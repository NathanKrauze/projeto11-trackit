import LoginPage from "./pages/LoginPage/LoginPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import TodayHabitsPage from "./pages/TodayHabitsPage/TodayHabitsPage"
import HabitsPage from "./pages/HabitsPage/HabitsPage"
import HabitsHistoryPage from "./pages/HabitsHistoryPage/HabitsHistoryPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/cadastro' element={<SignUpPage />}/>
        <Route path='/hoje' element={<TodayHabitsPage />}/>
        <Route path='/habitos' element={<HabitsPage />}/>
        <Route path='/historico' element={<HabitsHistoryPage />}/>
      </Routes>
    </BrowserRouter>
  )
}
  