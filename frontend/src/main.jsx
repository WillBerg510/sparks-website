import { createRoot } from 'react-dom/client'
import './stylesheets/index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Stories from './pages/Stories.jsx'
import Issues from './pages/Issues.jsx'
import Layout from './components/Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'stories', element: <Stories /> },
      { path: 'issues', element: <Issues /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
