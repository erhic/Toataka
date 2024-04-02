import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './sections/Contact.jsx'
import Register from './Components/Register.jsx'
import Login from './Components/Login.jsx'
import Pickupservice from './Components/Pickupservice.jsx'
import Allaboutus from './Pages/Allaboutus.jsx'
import Allproducts from './Pages/Allproducts.jsx'
import Allservices from './Pages/Allservices.jsx'
import Allblog from './Pages/Allblog.jsx'
import Home from './sections/Home.jsx'
// import { Home, Product } from './sections'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', element: <Home />
      },
      {
        path: 'product/', element: <Allproducts />
      },
      {
        path: 'aboutus/', element: <Allaboutus />
      },
      {
        path: 'services/', element: <Allservices />
      },
      {
        path: 'blog/', element: <Allblog />
      },
      {
        path: 'contact/', element: <Contact />
      },
      {
        path: 'login/', element: <Login />
      },
      {
        path: 'register/', element: <Register />
      },
      {
        path: 'orderpickup/', element: <Pickupservice />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
