
import './App.css';
import { Route, Routes } from "react-router-dom"
import SearchComponent from './Components/SearchComponent';

function App() {


  return (
    <div className="App">
      <h1>Acuerdos Transformativos Universidad de Oviedo</h1>
      <Routes>
        <Route path="/journals" element={
        <SearchComponent />
        }/>
      </Routes>
    </div>
  );
}

export default App;
