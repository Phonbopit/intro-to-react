import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './components/Home'
import About from './components/About'
import Product from './components/Products'
import ProductDetail from './components/ProductDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'products',
        element: <Product />,
      },
      {
        path: 'products/:id',
        element: <ProductDetail />,
      },
      {
        path: '*',
        element: <p>Not Found</p>,
      },
    ],
  },
])

export default router
