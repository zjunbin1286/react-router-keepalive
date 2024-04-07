import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout'
import Home from '../page/Home'
import About from '../page/About'
import Article from '../page/Article'

const routes = [
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/article',
        element: <Article></Article>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
