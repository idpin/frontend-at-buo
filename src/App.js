

import './App.css';
import SearchComponent from './Components/SearchComponent';
import uniovi from './uniovi.png'
import { Routes, Route, Link } from 'react-router-dom';
import CreateUserComponent from './Components/CreateUserComponent';
import LoginUserComponent from './Components/LoginUserComponent';



function App() {


  return (
  <html>
    <header className='fija'>
      <img src={uniovi} className='App-logo' alt='logo'/>
      <hr className="hr-alta"></hr>
    </header>
   
     <div className="main-container">
      <nav>
        <ul className='navbar'>
          <li>Index</li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>

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

