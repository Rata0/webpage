import { NavBar } from './components/navBar'
import { ScrollMenu } from './components/scrollMenu'
import { Card } from './components/card'
import { CreateForm } from './components/form'
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
