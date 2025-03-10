import NavBar from './components/NavBar'
import ScrollMenu from './components/ScrollMenu'
import Card from './components/Card'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function PageOne() {
  return (
    <div>Page One</div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollMenu />
      <Routes>
        <Route path='cards' element={<Card />} />
        <Route path='create' element={<PageOne />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
