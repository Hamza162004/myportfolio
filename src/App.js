
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Floating from './components/Floating';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteState from './context/NoteState';
import Projects from './components/Projects';

function App() {
  return (
    <div className='app'>
      <NoteState>
      <Router>
        <Navbar />
        <Floating/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/projects' element={<Projects/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
        
      </Router>
      </NoteState>
    </div>
  );
}

export default App;
