import { useState } from 'react'
import LandingPage from './user/LandingPage';
import FormDefault from './user/FormDefault';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/pendaftaran' element={<FormDefault/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
