
import 'antd/dist/reset.css'

import './App.css'; 
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import SearchComponent from './Components/SearchComponent';
import CreateUserComponent from './Components/CreateUserComponent';
import LoginUserComponent from './Components/LoginUserComponent';
import RequirementsComponent from './Components/RequirementsComponent';
import WorkflowComponent from './Components/WorkflowComponent';
import DashboardComponent from './Components/DashboardComponent';
import AboutComponent from './Components/AboutComponent';
import { Layout, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import AvailablesComponent from './Components/AvailablesComponent';
import ReportsComponent from './Components/ReportsComponent';
import QueriesComponent from './Components/QueriesComponent';
import AddComponent from './Components/AddComponent';
import ApprovedComponent from './Components/ApprovedComponent';
import Title from 'antd/es/typography/Title'
import uniovi from './uniovi.jpg';

import { wiley} from './wiley.png';

import React from 'react';
import { Divider } from 'antd';
import { backendURL } from './Globals';




let App = ()=> {
  let [notification, setNotification] = useState("");
  let [login, setLogin] = useState(false)
  let navigate = useNavigate();



  useEffect (()=>{
    checkLogin();
  },[])

  let checkLogin = async () => {
    if (localStorage.getItem("apiKey") != null){
      let response = await fetch (backendURL+"/users/checklogin?apiKey="+localStorage.getItem("apiKey"))
      if (response.status == 401){
        setLogin(false)
        navigate("/login")
      } else {
        setLogin(true);
      }
      
      } else {
      setLogin(false);
    }
//No está funcionando. Video 8.8.8. Control sobre usuarios identificados. Es para que al recargar la página no se pierda el login hecho antes
  }
 
  let { Header, Content, Footer} = Layout

  let disconnect = async () =>{
    await fetch (backendURL+"/users/disconnect?apiKey="+localStorage.getItem("apiKey"))

    localStorage.removeItem("apiKey")
    setLogin(false)
    navigate("/login")
  }




  return (
<meta charSet='UTF-8' name='viewport' content='width-device-widthe, initial-scale=1.0'>
</meta>,
    <Layout className='webcolor' style={{ minHeight:'100vh', paddingLeft: '4cm', paddingRight: '4cm'}} >
     
      <Header className='HeaderAnt'>
           
     <Content style={{}}>
      <img style={{paddingTop:'0.3cm', paddingLeft: '0.9cm'}} src={uniovi} className="App-logo"/>
      <header className= "imagen-texto" style={{fontFamily: 'Arial Light', fontStretch: 'expanded', display: 'inline', paddingLeft: '1cm',  fontSize: '60px', fontWeight: 'bold'}}><span style={{color: '#00a3e0'}}>Acuerdos</span><span style={{color: '#8e8e8e'}}> Transformativos</span></header>
    
     </Content>
     
              { !login && ( //para cuando no estás logueado
            <Menu className='HeaderAnt' style={{float:'right', fontFamily: 'Yu Gothic Light',paddingTop: '0.1cm', fontSize: '18px', fontWeight: '900', minWidth: '700px', paddingLeft: '0.5cm', paddingRight:'1cm'}} mode= 'horizontal' items={[
                {key:"menuAbout", label:<Link to="/about">Información</Link> },
                {key:"menuRequeriments", label:<Link to="/requeriments">Requisitos</Link> },
                {key:"Menusearch", label:<Link to="/search">Buscador</Link> },
                {key:"MenuWorflow", label:<Link to="/workflow">Procedimiento</Link> },
                {key:"MenuAvailables", label:<Link to="/availables">Disponibles</Link> },
                {key:"MenuReports", label:<Link to="/reports">Estadísticas</Link> },
                {key:"MenuQueries", label:<Link to="/queries">Contacta</Link> },
              
               
                
             ]}>
            </Menu>
       )} 
       

          { login && ( //para cuando estás logueado
              <Menu className='HeaderAnt' style={{float:'right', fontFamily: 'Yu Gothic Light',paddingTop: '0.1cm', fontSize: '18px', fontWeight: '900', minWidth: '700px', paddingLeft: '0.5cm', paddingRight:'1cm'}} mode= 'horizontal' items={[
                {key:"menuAbout", label:<Link to="/about">Información</Link> },
                {key:"menuRequeriments", label:<Link to="/requeriments">Requisitos</Link> },
                {key:"Menusearch", label:<Link to="/search">Buscador</Link> },
                {key:"MenuWorflow", label:<Link to="/workflow">Procedimiento</Link> },
                {key:"MenuAvailables", label:<Link to="/availables">Disponibles</Link> },
                {key:"MenuReports", label:<Link to="/reports">Estadísticas</Link> },
                {key:"MenuDashboard", label:<Link to="/dashboards">Dashboards</Link> },
                {key:"MenuAdd", label:<Link to="/add">Añadir</Link> },
                {key:"MenuApproved", label:<Link to="/approved">Aprobados</Link> },
                {key:"MenuDisconnect", label:<Link to="#" onClick={disconnect}>Sign out</Link> },

                //{key:"MenuRegister", label:<Link to="/register">Registrarse</Link> },
              ]}>
             </Menu>
       )}
      </Header>

      <Content style={ { paddingTop: '2cm'}}>
        <Routes>
         

            <Route path="/register" element={
            <CreateUserComponent/>
            }/>


            <Route path="/search" element={
              <SearchComponent/>
              
            }/>     

            <Route path="/requeriments" element={
              <RequirementsComponent/>
              
            }/>  
              <Route path="/workflow" element={
              <WorkflowComponent/>
              
            }/> 
            <Route path="/dashboards" element={
              <DashboardComponent/>
              
            }/>,
            <Route path="/about" element={
              <AboutComponent/>
              
            }/>,
            <Route path="/availables" element={
              <AvailablesComponent/>

            }/>,
            <Route path="/reports" element={
              <ReportsComponent/>
              
            }/>,<Route path="/queries" element={
              <QueriesComponent/>
              
            }/>,<Route path="/add" element={
              <AddComponent/>

            }/>,<Route path="/approved" element={
              <ApprovedComponent/>
              
            }/>,<Route path="/login" element={
              <LoginUserComponent setLogin={setLogin}/>

            }/>
        </Routes>
      </Content>
''
      <Footer className='HeaderAnt' style={ { textAlign:"center", fontFamily: 'Yu Gothic Light', fontSize: '18px', fontWeight: '900', paddingBottom: '1cm'}}>
        Biblioteca de la Universidad de Oviedo
      </Footer>
    </Layout>
      


  );
}

export default App;

