// import React from 'react'

// import Navbar from "./components/Navbar"
import Home from "./pages/Home"
// import Products from "./pages/Products"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Products from "./pages/Products"
import About from "./pages/About"
// import Contact from "./pages/Contact"
import RootLayout from "./Layout/RootLayout"
import ContactLayout from "./Layout/ContactLayout"
import ContactInfo from "./components/contactInfo"
import ContactForm from "./components/ContactForm"
import NotFound from "./components/NotFound"
import JobLayout from "./Layout/JobLayout"
import Jobs, { jobsLoader } from "./pages/Jobs"
import Filter from "./pages/Filter"

const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="filter" element={<Filter/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact/:name" element={<ContactLayout/>}>

        <Route path="info" element={<ContactInfo/>}></Route>
        <Route path="form" element={<ContactForm/>}></Route>
        </Route>
        
        <Route path="*" element={<NotFound/>}/>
      <Route path="jobs" element={<JobLayout/>}>
      <Route index element={<Jobs/>}loader={jobsLoader}/>
      </Route>
      
     
     
      </Route>
    )
  )
  return (
    <RouterProvider router={(router)}>
      {/* <Navbar/> */}
     {/* <Routes> */}
        {/* <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/> */}
     {/* </Routes> */}
      

    </RouterProvider>
  )
}

export default App