
import 'antd/dist/reset.css'

import uniovi from './uniovi.png'
import './App.css'; 
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import SearchComponent from './Components/SearchComponent';
import CreateUserComponent from './Components/CreateUserComponent';
import LoginUserComponent from './Components/LoginUserComponent';
import NewsComponent from './Components/NewsComponent';
import DashboardComponent from './Components/DashboardComponent'; 
import AboutComponent from './Components/AboutComponent';
import { Layout, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';





function App() {
  let [notification, setNotification] = useState("");
  let [login, setLogin] = useState(false)
  let navigate = useNavigate();

 
  let { Header, Content, Footer} = Layout

  return (

    <Layout className='layout'style={{ minHeight:'100vh'}} > 
      <Header style={{ marginTop:'0cm'}}>
        
              { !login && ( //para cuando no estás logueado
            <Menu theme="dark" mode="horizontal" items={[
                {key:"menuAbout", label:<Link to="/about">About</Link> },
                {key:"menuNews", label:<Link to="/news">News</Link> },
                {key:"Menusearch", label:<Link to="/search">Journals</Link> },
                {key:"MenuWorflow", label:<Link to="/workflow">Workflows</Link> },
                {key:"MenuReports", label:<Link to="/reports">Reports</Link> },
                {key:"MenuQueries", label:<Link to="/queries">Queries</Link> },
                {key:"MenuRegister", label:<Link to="/register">Register</Link> },
                {key:"MenuLogin", label:<Link to="/login">Login</Link> },
             ]}>
            </Menu>
       )} 
       

          { login && ( //para cuando estás logueado
              <Menu theme="dark" items={[
               {key:"menuAbout", label:<Link to="/about">About</Link> },
               {key:"menuNews", label:<Link to="/news">News</Link> },
               {key:"Menusearch", label:<Link to="/search">Search</Link> },
               {key:"MenuWorflow", label:<Link to="/workflow">Workflows</Link> },
               {key:"MenuWorMyJournals", label:<Link to="/myJournals">MyJournals</Link> },
               {key:"MenuWorDashboards", label:<Link to="/dashboard">Dashboards</Link> },
               {key:"MenuReports", label:<Link to="/reports">Reports</Link> },
               {key:"MenuQueries", label:<Link to="/queries">Queries</Link> },
               {key:"MenuDisconnect", label:<Link to="/disconnect">Disconnect</Link> },
              ]}>
             </Menu>
       )}
      </Header>

      <Content style={ { padding: '20px 50px'}}>
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

            <Route path="/news" element={
              <NewsComponent/>
              
            }/>  
            <Route path="/dashboards" element={
              <DashboardComponent/>
              
            }/>,
            <Route path="/aboutcomponent" element={
              <AboutComponent/>
              
            }/> 
        </Routes>
      </Content>

      <Footer style={ { textAlign:"center"}}>
        Biblioteca de la Universidad de Oviedo
      </Footer>
    </Layout>
      


  );
}

export default App;

