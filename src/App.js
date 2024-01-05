import logo from './logo.svg';
import React from 'react'
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './component/home';
import Login from './component/logo';
import Register from './component/register';
import Category from './component/category';
import About from './component/about';
import Contact from './component/contact';
const App = () => {
  return (
    <div className="app">
      
      <Router>
      <nav className='navi'>
        <ul className='Hello'>
          <li className='active'>
      <Link style={{ textDecoration: 'none',color:'black'}}to="/">HOME</Link>
      </li>
      <li className='actives'>
        <Link style={{ textDecoration: 'none',color:'black'}}to="/login">LOGIN</Link>
        </li>
        <li className='activess'>
        <Link style={{ textDecoration: 'none',color:'black'}}to="/register">REGISTER</Link>
        </li>
        </ul>
        </nav>
        <Routes>
                <Route exact path="/" element={ <Home/>}/>
                    <Route exact path="/login" element={ <Login/>} />
                    <Route exact path="/register" element={ <Register/>} />
                    <Route exact path="/category" element={ <Category/>} />
                    <Route exact path="/about" element={ <About/>} />
                    <Route exact path="/contact" element={ <Contact/>} />
                    </Routes>
            </Router>  
        </div>
  );
 }
  export default App;