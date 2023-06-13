import './App.css'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
