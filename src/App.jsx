import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';

const App = () => {
  console.log("hlo")
  return (
    <Routes>
      <Route path="/" element={<Layout><Dashboard/></Layout>} />
    </Routes>
  )
}

export default App
