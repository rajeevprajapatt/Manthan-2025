import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../screen/Home'
import Register from '../screen/Register'
// import Temp from '../screen/temp'
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
  {
    path: "/register", element: <div>
      <Register />
    </div>
  },

])

const AppRoutes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes