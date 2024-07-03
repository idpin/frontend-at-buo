import ReactECharts from 'echarts-for-react';
import { backendURL } from "../Globals";
import React, { useState, useEffect } from 'react';
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import { Card } from 'antd';
import Item from 'antd/es/list/Item';





let ReportsComponent = () => {

  
  let [articles, setArticles] = useState ([])
  let [message, setMessage] = useState("")

  let getRecuperarAprobados2 = async () => { 
   
    let response = await fetch(backendURL+"/analytics/departamento", {

    })
    
  console.log("hola");
    
  if ( response.ok ){
  
    
  let jsonData = await response.json();
  
   
  setArticles(jsonData)
    
   
  } else {
  
  let jsonData = await response.json();
  
  alert(jsonData.error);
   
  setMessage(jsonData.error+"error")
   
  }
 
  }
  useEffect(() => {
    getRecuperarAprobados2();
  }, [])
  

  console.log("dentro");
 
  let getRecuperarAprobados = async () => { 
   
    let response = await fetch(backendURL+"/analytics", {

    })
    
  console.log("hola");
    
  if ( response.ok ){
  
    
  let jsonData = await response.json();
  
   
  setArticles(jsonData)
    
   
  } else {
  
  let jsonData = await response.json();
  
  alert(jsonData.error);
   
  setMessage(jsonData.error+"error")
   
  }
 
  }
  useEffect(() => {
    getRecuperarAprobados();
  }, [])

  
  

  console.log("dentro");
   
  const option = {
    xAxis: {
      type: 'category',
      data: articles.map(item=>item.ramaDepartamento)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: articles.map(item=>item.cantidad),
        type: 'bar'
      }
    ]
  };
      const optionother = {
        xAxis: {
          type: 'category',
          data: articles.map(item=>item.departamento)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: articles.map(item=>item.cantidad),
            type: 'bar'
          }
        ]
      };
      
    return (
       
        <div style={{width:'30%', paddingTop:'3cm', textAlign:'left'}}>
        <h2 className='pr11'>Departamentos</h2>
        <ReactECharts option={optionother} />
        <ReactECharts option={option} />
        </div>


    )

   
}
    
   

export default ReportsComponent;