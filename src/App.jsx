import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import HomePage from './pages/home/HomePage'
import DetailPage from './pages/portfolio/components/DetailPage'
import PortfolioPage from './pages/portfolio/PortfolioPage'

function App() {


  return (
    <Routes>
      {/* 1. Definisikan Rute Induk (Parent Route) */}
      {/* Semua rute di dalamnya akan menggunakan komponen Layout */}
      <Route path="/" element={<Layout />}>

        {/* 2. Definisikan Rute Anak (Child Routes) */}
        {/* `index` berarti ini adalah rute default untuk path induk ("/") */}
        <Route index element={<HomePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:projectSlug" element={<DetailPage />} />

      </Route>
    </Routes>
  )
}

export default App
