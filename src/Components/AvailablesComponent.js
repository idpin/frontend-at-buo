import { Card } from 'antd';
import ReactECharts from 'echarts-for-react';
import React from 'react';




let AvailablesComponent = () => {

   
    const option = {
        
        
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['IEEE', 'RSC', 'ACS', 'Wiley', 'Springer', 'Elsevier']
        },
        series: [
          {
            name: 'APCs consumidos',
            type: 'bar',
            data: [4, 6, 6, 20, 32, 57]
          },
          {
            name: 'APCs asignados',
            type: 'bar',
            data: [ 20, 11, 15, 53, 65, 172]
          }
        ]
      };
     
     
    
      return (
     
        
        <div style={{ textAlign:'center', width: '50%', paddingTop: "3cm"}}>
         <ReactECharts option={option} />
         <p className="pr11">Para CUP y SCOAP los APCs son ilimitados.</p>
         </div>
       
       
     )
 
    
 }

        
    

    
   

export default AvailablesComponent;