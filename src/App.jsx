import './App.css'
import Nav from './components/Nav'
import Completed from './components/Completed'
import Activity from './components/Activity'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'

function App() {
const router=createBrowserRouter([
  {
    element:<><Home/></>,
    path:'/'
  },
  {
    element:<><Completed/></>,
    path:'/finished'
  },
  {
    element:<><Activity/></>,
    path:'/activity'
  }
])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
