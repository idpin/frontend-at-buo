import { useEffect, useState } from "react";

import { backendURL } from "../Globals";

import { Table } from "antd"

let SearchComponent = (props) => {

let [issn,setIssn] = useState("")
let [journals, setJournals] = useState ([])
let [message, setMessage] = useState("")




    let onChangeIssn = (e) => {
        setIssn(e.currentTarget.value)
    }

    let clickSearch = async () => { //PORTE: cómo hacer que el enter haga click
        let response = await fetch(backendURL+"/journals/"+issn, {
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
            setMessage(jsonData.error+": "+issn)
        }
        
    }

    let columns = [
        {
            title: "title",
            dataIndex: "title",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "issn",
            dataIndex: "issn"
        },
        {
            title: "publisher",
            dataIndex: "publisher"
        },
        {
            title: "business model",
            dataIndex: "business model"
        },
        {
            title: "APC coverage",
            dataIndex: "APC coverage"
        }
    ]

  
    return (
       
        <div className="search-form">
        <h1>Acuerdos Transformativos UniOvi</h1>
        <hr className="hr-media"/>
            <div className="ph2">
            <p>Encuentra una revista participante:</p>
            </div>
        <input type="text" className="search-input" placeholder="Encuentra una revista por ISSN" onChange={onChangeIssn}/>
        <button onClick={() => {clickSearch()}} className="search-button">Buscar</button>
       
        { journals.length > 0 && <Table columns={columns} dataSource={journals}/>} 
           
        </div>
//ahora no se ve el mensaje de error cuando el parámetro puesto en la caja no devuelve resultados. Queremos que salga el mensaje: has puesto mal el parámetro o la revista que buscas no forma parte de los ATs

    )

   

    
}

export default SearchComponent;