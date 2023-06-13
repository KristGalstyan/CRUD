import './App.css'
import Create from './components/Create'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Update from './components/Update'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
