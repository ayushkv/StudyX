import './App.css'
import Home from './Pages/Home'
import Footer from './components/footer/footer'
import Header from './components/header/Header'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
