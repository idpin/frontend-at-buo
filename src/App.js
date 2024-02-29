

import './App.css';
import SearchComponent from './Components/SearchComponent';
import uniovi from './uniovi.png'
import { Routes, Route, Link } from 'react-router-dom';
import CreateUserComponent from './Components/CreateUserComponent';
import LoginUserComponent from './Components/LoginUserComponent';
import JournalsComponent from './Components/JournalsComponent';
import NewsComponent from './Components/NewsComponent';


// MyJournals y Dashboards son enlaces condicionales; también el disconnect es condicional

function App() {


  return (
  <html>
    <header className='fija'>
      <img src={uniovi} className='App-logo' alt='logo'/>
      
    </header>
   
     <div className="main-container">
      <nav>
        <ul className='navbar'>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/journals">Journals</Link></li>
          <li><Link to="/workflow">Workflows</Link></li>
          <li><Link to="/myJournals">MyJournals</Link></li>
          <li><Link to="/dashboard">Dashboards</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/disconnect">Disconnect</Link></li>

        </ul>
      </nav>

     
        <Routes>
            <Route path="/register" element={
              <CreateUserComponent/>
            }/>

            <Route path="/login" element={
              <LoginUserComponent/>
            }/>

            <Route path="/search" element={
              <SearchComponent/>
              
            }/>   

            <Route path="/journals" element={
              <JournalsComponent/>
              
            }/>   

            <Route path="/news" element={
              <NewsComponent/>
              
            }/>  
        </Routes>
      
       

       
      </div>
  <footer className="footer" > 
    <hr className="hr-baja"></hr>
    <p>Biblioteca de la Universidad de Oviedo 2024</p>
    <p>Licencia Apache 2.0 <a href="https://github.com/idpin">GitHub</a> </p>
  </footer>
  </html>
  );
}

export default App;

