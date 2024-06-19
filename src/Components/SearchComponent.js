import { useEffect, useState } from "react";

import { backendURL } from "../Globals";

import { Table } from "antd"

import Select from 'react-select';
import { Checkbox } from 'antd';
import { Card } from 'antd';




let SearchComponent = (props) => {

let [issn,setIssn] = useState("")
let [cuartil,setCuartil] = useState([])
let [medida,setMedida] = useState([])
let [field,setField] = useState(null)
let [jcrq, setJcrq] = useState(null)
let [sjrq, setSjrq] = useState(null)
let [publisher, setPublisher] = useState([])
let [journals, setJournals] = useState ([])
let [message, setMessage] = useState("")





    let onChangeField = e => {
        if(e){
            setField(e.value);
        }else{
            setField(null);
        }
    }

    let onChangeIssn = (e) => {
        setIssn(e.currentTarget.value)
    }


    let onChangeJcrq = e => {
        if(e){
            setJcrq(e.value);
        }else{
            setJcrq(null);
        }
    }

    let onChangeSjrq = e => {
        if(e){
            setSjrq(e.value);
        }else{
            setSjrq(null);
        }
    }

    let onChangePublisher = e => {
        
        if(e){
            setPublisher(e.value);
        }else{
            setPublisher(null);
        }
      
    }

    const onChangeCheckboxWos = (checkedValues) => {
        console.log('checked = ', checkedValues);
        setCuartil(checkedValues)
        console.log(cuartil)
      };
      const optionsWos = [{"value":"Q1","label":"Q1"}, {"value":"Q2","label":"Q2"}, {"value":"Q3","label":"Q3"}, {"value":"Q4","label":"Q4"}];

    const onChangeCheckboxScopus = (checkedValues) => {
        console.log('checked = ', checkedValues);
        setMedida(checkedValues)
        console.log(medida)
      };
      const optionsMedida = [{"value":"Q1","label":"Q1"}, {"value":"Q2","label":"Q2"}, {"value":"Q3","label":"Q3"}, {"value":"Q4","label":"Q4"}];

    const onChangeCheckboxPublisher = (checkedValues) => {
        console.log('checked = ', checkedValues);
        setPublisher(checkedValues)
        console.log(publisher)
      };
      const optionsPublisher = [{"value":"elsevier","label":"Elsevier"}, {"value":"springer","label":"Springer"}, {"value":"wiley","label":"Wiley"}, {"value":"acs","label":"ACS"}, {"value":"rsc","label":"RSC"}, {"value":"rsc","label":"RSC"}, {"value":"ieee","label":"IEEE"}, {"value":"cup","label":"CUP"}, {"value":"scoap3","label":"SCOAP3"}];

  
    

    let clickSearch = async () => { //hacer que el enter haga click
        let params = {};
        if(issn){
            params.search= issn
        }
        if(publisher){
            params.publisher= publisher
        }
        if(field){
            params.field= field
        }
        if(jcrq){
            params.jcrq= jcrq
        }
        if(cuartil){
            params.cuartil= cuartil
         }
        if(sjrq){
            params.sjrq= sjrq
        }
        if(medida){
            params.medida= medida
        }
        
      
      





       

        let response = await fetch(backendURL+"/journals?"+new URLSearchParams(params).toString(), {
            method: "GET",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            params: JSON.stringify({
                issn: issn
            })
        })
        
        if ( response.ok ){
    
            let jsonData = await response.json();
            setMessage(JSON.stringify(jsonData))
            setJournals(jsonData)

            
        } else {
            let jsonData = await response.json();
            alert(jsonData.error);
            setMessage(jsonData.error+": "+issn)
        }
        
    }

    let columns = [
        {
            title: "Title",
            dataIndex: "title",
            render: (text) => <a href="https://www.sciencedirect.com/journal/accident-analysis-and-prevention/">{text}</a>
        },
        {
            title: "ISSN",
            dataIndex: "issn"
        },
        {
            title: "Publisher",
            dataIndex: "publisher",
             render: (text) => <a href="https://www.elsevier.com/open-access/agreements/spain">{text}</a>
           
        },
        {
            title: "APC coverage",
            dataIndex: "apc coverage"
        },
        
        {
            title: "Subject",
            dataIndex: "field"
        },
      
        {
            title: "JCR Cuartil",
            dataIndex: "jcrq"
        },
        
        {
            title: "SJR Cuartil",
            dataIndex: "sjrq"
        },
    ]

  
    return (

    
        <div style={{paddingTop:'3cm'}} className="search-form">
        
        
            <div className="ph2">
            
            </div>


        <hr></hr>
        
        <div className="cajas-centradas">
        <input type="text" className="search-input" placeholder="Encuentra una revista por título o ISSN" onChange={onChangeIssn}/>
            <Select 
        className="caja-linea"
        classNamePrefix="select"
        isClearable={true}
        isSearchable={true}
        name="fields"
        onChange={onChangeField} // assign onChange function  //*<label for="cars">Choose a car:</label>
        options={[{"value":"Enabling & Strategic Technologies","label":"Enabling & Strategic Technologies"},{"value":"Engineering","label":"Engineering"},{"value":"#N/D","label":"#N/D"},{"value":"Clinical Medicine","label":"Clinical Medicine"},{"value":"Economics & Business ","label":"Economics & Business "},{"value":"Mathematics & Statistics","label":"Mathematics & Statistics"},{"value":"Chemistry","label":"Chemistry"},{"value":"Physics & Astronomy","label":"Physics & Astronomy"},{"value":"Agriculture, Fisheries & Forestry","label":"Agriculture, Fisheries & Forestry"},{"value":"Earth & Environmental Sciences","label":"Earth & Environmental Sciences"},{"value":"Biomedical Research","label":"Biomedical Research"},{"value":"Philosophy & Theology","label":"Philosophy & Theology"},{"value":"Biology","label":"Biology"},{"value":"Psychology & Cognitive Sciences","label":"Psychology & Cognitive Sciences"},{"value":"Information & Communication Technologies","label":"Information & Communication Technologies"},{"value":"Public Health & Health Services","label":"Public Health & Health Services"},{"value":"Built Environment & Design","label":"Built Environment & Design"},{"value":"Historical Studies","label":"Historical Studies"},{"value":"Social Sciences","label":"Social Sciences"},{"value":"Communication & Textual Studies","label":"Communication & Textual Studies"},{"value":"article-level classification","label":"article-level classification"},{"value":"Visual & Performing Arts","label":"Visual & Performing Arts"}]}
      />






       </div>
       <div className="boton">
        <button onClick={() => {clickSearch()}} className="search-button">Buscar</button>
        </div>




<div className="cuartiles">
 
  <div > 
    <p>Cuartil JCR</p><Checkbox.Group options={optionsWos} defaultValue={['Pear']} onChange={onChangeCheckboxWos} />
    <p>Cuartil SJR</p><Checkbox.Group options={optionsMedida} defaultValue={['Pear']} onChange={onChangeCheckboxScopus} />
  </div>
 
  

  </div>

  <div className="cuartiles">  
  
  <Checkbox.Group options={optionsPublisher} defaultValue={['Pear']} onChange={onChangeCheckboxPublisher} />
    </div>




    <hr></hr>




{ journals.length > 0 && <Table style={{marginLeft: '1cm', marginRight: '1cm'}}columns={columns} dataSource={journals}
  theme={{
    token: {
      colorLink: 'black',
      colorTextDescription: 'rgb(24, 24, 0)'
        },
  }}
  />} 
       

        </div>
//ahora no se ve el mensaje de error cuando el parámetro puesto en la caja no devuelve resultados. Queremos que salga el mensaje: has puesto mal el parámetro o la revista que buscas no forma parte de los ATs

    )

   

    
}

export default SearchComponent;