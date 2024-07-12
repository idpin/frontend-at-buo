import ReactECharts from 'echarts-for-react';
import { backendURL } from "../Globals";
import React, { useState, useEffect } from 'react';
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import Item from 'antd/es/list/Item';
import { Label } from '@mui/icons-material';
import { Card, Col, Row, Statistic } from 'antd';
import { EuroOutlined } from '@ant-design/icons';





let ReportsComponent = () => {

  
  let [articles, setArticles] = useState ([])
   let [departamentos, setDepartamentos] = useState ([])
   let [editores, setEditores] = useState ([])
   let [periodos, setPeriodos] = useState ([])
  let [message, setMessage] = useState("")

  let getRama = async () => { 
   
    let response = await fetch(backendURL+"/analytics/rama", {

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
    getRama();
  }, [])
  
  console.log("dentro");


 
  let getDepartamento = async () => { 
   
    let response = await fetch(backendURL+"/analytics/departamento", {

    })
    
  console.log("hola");
    
  if ( response.ok ){
  
    
  let jsonData = await response.json();
  
   
  setDepartamentos(jsonData)
    
   
  } else {
  
  let jsonData = await response.json();
  
  alert(jsonData.error);
   
  setMessage(jsonData.error+"error")
   
  }
 
  }
  useEffect(() => {
    getDepartamento();
  }, [])


  console.log("dentro");



  let getEditor = async () => { 
   
    let response = await fetch(backendURL+"/analytics/editor", {

    })
    
  console.log("hola");
    
  if ( response.ok ){
  
    
  let jsonData = await response.json();
  
   
  setEditores(jsonData)
    
   
  } else {
  
  let jsonData = await response.json();
  
  alert(jsonData.error);
   
  setMessage(jsonData.error+"error")
   
  }
 
  }
  useEffect(() => {
    getEditor();
  }, [])
  
  console.log("dentro");


  let getPeriodo = async () => { 
   
    let response = await fetch(backendURL+"/analytics/periodo", {

    })
    
  console.log("hola");
    
  if ( response.ok ){
  
    
  let jsonData = await response.json();
  
   
  setPeriodos(jsonData)
    
   
  } else {
  
  let jsonData = await response.json();
  
  alert(jsonData.error);
   
  setMessage(jsonData.error+"error")
   
  }
 
  }
  useEffect(() => {
    getPeriodo();
  }, [])
  
  console.log("dentro");



   
  const rama = {
    xAxis: {
      type: 'category',
      data: articles.map(item=>item.ramaDepartamento),
      Label: {
        show: true,
        interval: 0,
        rotate: 45,
      }
    
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

  const departamento = {
    xAxis: {
      type: 'category',
      data: departamentos.map(item=>item.departamento),
      Label: {
        show: true,
        interval: 0,
        rotate: 45,
      }
    
    },

    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: departamentos.map(item=>item.cantidad),
        type: 'bar'
      }
    ]
  };

  const editor = {
    xAxis: {
      type: 'category',
      data: editores.map(item=>item.editor),
      Label: {
        show: true,
        interval: 0,
        rotate: 45,
      }
    
    },

    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: editores.map(item=>item.cantidad),
        type: 'bar'
      }
    ]
  };

  const periodo = {
    xAxis: {
      type: 'category',
      data: periodos.map(item=>item.periodo),
      Label: {
        show: true,
        interval: 0,
        rotate: 45,
      }
    
    },

    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: periodos.map(item=>item.cantidad),
        type: 'bar'
      }
    ]
  };



 
      
      
    return (
       

<Row style={{paddingTop: '2cm'}} gutter={16}>


<Col span={12}>
      <Statistic title="Inversión Open Access" value={1412893} prefix={<EuroOutlined />}/>
    </Col>
   
    <Col span={12}>
      <Statistic title="Artículos financiados" value={910}/>
    </Col>
    <Col span={12}>
      <Card title="Artículos aprobados por ramas del conocimiento" bordered={false}>
      <ReactECharts option={rama} />
      </Card>
    </Col>
    <Col span={12}>
      <Card title="Artículos aprobados por departamentos uniovi" bordered={false}>
      <ReactECharts option={departamento} />
     
      </Card>
    </Col>
    <Col span={12}>
      <Card title="Artículos aprobados por ramas del conocimiento" bordered={false}>
      <ReactECharts option={editor} />
      </Card>
    </Col>
    <Col span={12}>
      <Card title="Artículos aprobados por departamentos uniovi" bordered={false}>
      <ReactECharts option={periodo} />
     
      </Card>
    </Col>
  </Row>


    )

   
}
    
   

export default ReportsComponent;