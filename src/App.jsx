import './App.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound404 from './Components/NotFound 404/NotFound404'



function App() {
  
  const routes = createBrowserRouter([
    {
      path:"",element : <Layout /> , children :[
      {index : true, element : <Home />},
      {path : "about", element : <About />},
      {path : "portfolio" , element : <Portfolio />},
      {path : "contact", element : <Contact  />},
      {path : "*", element : <NotFound404 />}
    ]
    }
  ])
  return (
      <RouterProvider router= {routes}></RouterProvider>
  )
}

export default App
