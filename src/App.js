import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Login from './components/Login';
import Register from './components/Register';
import Job from './components/Job'
import { Navbar } from 'react-bootstrap';

function App() {
  return (

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Job' element={<Job/>}/>
        
      </Routes>
    </BrowserRouter>    
  );
}

export default App;