import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'

import './App.css'

function App() {
  return (
    <>
      <h1>Hello React Router.</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
