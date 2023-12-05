import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import CreateOrder from './views/CreateOrder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/:id" element={} /> */}
      <Route path='/order/create' element={<CreateOrder />} />
    </Routes>
  )
}

export default App
