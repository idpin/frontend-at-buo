import React, { useState, useEffect } from 'react';
import { Button, Table } from 'antd';
import { backendURL } from "../Globals";




let ApprovedComponent =  () => {

  let [articles, setArticles] = useState ([])
  let [message, setMessage] = useState("")

  useEffect ( () => {
    getArticles();
  }, [])
  

  let getArticles =  async () => {
    let response = await fetch(backendURL+"/articles?apiKey="+localStorage.getItem("apiKey"))

  
      if ( response.ok ){
  
    let jsonData = await response.json();
    setMessage(JSON.stringify(jsonData))
    setArticles(jsonData)
  
    
     } else {
    let jsonData = await response.json();
    alert(jsonData.error);
    setMessage(jsonData.error+"error")
    }
  }
  

  
  const columns = [
    {
      title: 'Título',
      dataIndex: 'titulo',
    },
    {
      title: 'DOI',
      dataIndex: 'doi',
    },
    {
      title: 'url DOI',
      dataIndex: 'doiUrl',
    },
    {
      title: 'Fecha aceptación',
      dataIndex: 'fechaAceptacion',
    },
    {
      title: 'Autor',
      dataIndex: 'autor',
    },
    {
      title: 'Departamento',
      dataIndex: 'departamento',
    },
    {
      title: 'Editor',
      dataIndex: 'editor',
    },
    {
      title: 'Revista',
      dataIndex: 'revista',
    },
    {
      title: 'ISSN',
      dataIndex: 'issn',
    },
  ]
  


   
   

return (
    <h2 style={{paddingTop: '3cm'}}>Ver todos los APCs aprobados en una tabla</h2>,


     <Table style={{marginLeft: '1cm', marginRight: '1cm', marginTop: '3cm'}}columns={columns} dataSource={articles}
  theme={{
    token: {
      colorLink: 'black',
      colorTextDescription: 'rgb(24, 24, 0)'
        },
  }}
  />
    
  );





  
}


export default ApprovedComponent;