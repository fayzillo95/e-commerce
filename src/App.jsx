import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CircularProgress, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { isDarkStore } from './store/Them.store'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { isLoadingStore } from './store/isLoading-store'
import SimpleSlider from './pages/Sign'
import Sign from './pages/Sign'
import PropertiyAdd from './pages/PropertiyAdd'
import Footer from './components/Footer'
import Otp from './pages/Otp'

function App() {

  const { isDark } = isDarkStore()
  const { isLoadingModal } = isLoadingStore()
  const darkTheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
    
  })

  return (
    <div className='w-full min-h-screen scroll-m-0'>
      <ThemeProvider theme={darkTheme} >
        <div className={`inset-0 bg-[rgba(1,1,1,0.7)] flex items-center justify-center w-screen h-screen fixed z-50 ${isLoadingModal ? "" : "hidden"}`}>
          <CircularProgress size={150}>

          </CircularProgress>
        </div>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign' element={<Sign />} />
            <Route path='/otp' element={<Otp />} />
            <Route path='/properties' element={<PropertiyAdd />}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
