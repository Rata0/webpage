import NavBar from './components/NavBar'
import ScrollMenu from './components/ScrollMenu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function PageOne() {
  return (
    <div>Page One</div>
  )
}

function PageTwo() {
  return (
    <div>Page Two</div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollMenu />
      <Routes>
        <Route path="home" element={<PageOne />} />
        <Route path="products" element={<PageTwo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
