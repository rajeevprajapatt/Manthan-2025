import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../screen/Home'
import Events from '../screen/Events'

const router = createBrowserRouter([
  {
    path: "/", element: <div>
      <Home />
    </div>
  },
  {
    path: "/events", element: <div>
      <Events />
    </div>
  },

])

const AppRoutes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes