

import './App.css';
import SearchComponent from './Components/SearchComponent';
import uniovi from './uniovi.png'



function App() {


  return (
  <html>
    <header>
      <img src={uniovi} className='App-logo' alt='logo'/>
      <hr className="hr-alta"></hr>
      </header>
    <body>
     <div>
        <SearchComponent />
      </div>
    </body>
  <footer className="footer" > 
    <hr className="hr-baja"></hr>
    <p>Biblioteca de la Universidad de Oviedo 2024</p>
    <p>Licencia Apache 2.0 <a href="https://github.com/idpin">GitHub</a> </p>
  </footer>
  </html>
  );
}

export default App;

