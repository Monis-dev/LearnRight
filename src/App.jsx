import { useState } from 'react'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage';
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />

        <Route path="/login" element={<LoginForm />} />

        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App
