import ReactECharts from 'echarts-for-react';
import { backendURL } from "../Globals";
import React, { useState, useEffect } from 'react';
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import { Card } from 'antd';

let ReportsComponent = () => {


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

   const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            padAngle: 5,
            itemStyle: {
              borderRadius: 10
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 739.331, name: 'Elsevier' },
              { value: 251.793, name: 'Wiley' },
              { value: 182.750, name: 'Springer' },
              { value: 73.925, name: 'ACS' },
              { value: 14.995, name: 'RSC' },
              { value: 103.140, name: 'IEEE' },
              { value: 22.836, name: 'CUP' },
              { value: 15.259, name: 'SCOAP' }
            ]
          }
        ]
      };
 
      const option1 = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      };
      
    return (
       <Card style={{textAlign:'right'}}>
        <h2 className='pr11'>Costes 2023</h2>
        <ReactECharts option={option} />
        </Card>,
        <Card style={{width:'30%', paddingTop:'3cm', textAlign:'left'}}>
        <h2 className='pr11'>Departamentos</h2>
        <ReactECharts option={option1} />
        </Card>
    )

   
}
    
   

export default ReportsComponent;