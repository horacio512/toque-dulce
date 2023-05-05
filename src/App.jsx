import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Store from "./pages/Store"
import Example from "./pages/Carousel"

import { BrowserRouter } from "react-router-dom"

function App() {

  return (

    <BrowserRouter>
      <NavBar />
      <Home />
      <Store />
      <Example />
      <Contact />
      <Footer />

    </BrowserRouter>
  )
}

export default App
