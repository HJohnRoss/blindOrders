import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import CreateOrder from './views/CreateOrder'
import ViewOrder from './views/ViewOrder'
import EditOrder from './views/EditOrder'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/order/:id" element={<ViewOrder />} />
      <Route path="/order/edit/:id" element={<EditOrder/>} />
      <Route path='/order/create' element={<CreateOrder />} />
    </Routes>
  )
}

export default App
