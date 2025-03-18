import { NavBar } from './widgets/nav-bar'
import { CreateForm } from './pages/form'
import { Card } from './features/card'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='cards' element={<Card />} />
        <Route path='create' element={<CreateForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
