
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contactpage.jsx'
import Navbar from './components/Navbar'
import Card from './components/Card.jsx'
import Homechild from './pages/Homechild'


function App() {
 

  return (
     <BrowserRouter>
     <Navbar />
      <Routes>
          <Route path='' element={<Home />}>
            <Route path='/homechild' element={<Homechild/>} />
          </Route>
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/card' element={<Card/>} />
          
          
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
