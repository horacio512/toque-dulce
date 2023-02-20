import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
