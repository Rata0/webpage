import { NavBar } from './pages/navBar'
import { ScrollMenu } from './pages/scrollMenu'
import { Card } from './pages/card-read'
import { CreateForm } from './pages/form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollMenu />
      <Routes>
        <Route path='cards' element={<Card />} />
        <Route path='create' element={<CreateForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
