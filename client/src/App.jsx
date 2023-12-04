import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './views/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path="/" element={<Dashboard />} />
    {/* <Route path="/:id" element={<EditYear />} /> */}
  </Routes>
  )
}

export default App
