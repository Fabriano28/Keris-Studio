import {
  BrowserRouter,
  Routes,
  Route,
} from "react-Router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import About from './pages/About'
import Services from './pages/Services'
import Teams from './pages/Teams';

function App() {

  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="container mx-auto p-8">
          {/* Route components */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Services" element={<Services />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Teams" element={<Teams />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
