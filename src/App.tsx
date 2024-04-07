import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router'
import KeepAlive from './keepalive'

function App() {
  return (
    <KeepAlive keepPaths={[/article/, '/']}>
      <RouterProvider router={router} />
    </KeepAlive>
  )
}

export default App
