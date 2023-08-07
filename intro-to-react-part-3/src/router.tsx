import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './components/Home'
import About from './components/About'
import Product from './components/Products'

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
        path: 'product',
        element: <Product />,
      },
      {
        path: '*',
        element: <p>Not Found</p>,
      },
    ],
  },
])

export default router
