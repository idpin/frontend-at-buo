import { useState } from "react";

import { backendURL } from "../Globals";



let SearchComponent = (props) => {

let [issn,setIssn] = useState("")

let [message, setMessage] = useState("")

    let onChangeIssn = (e) => {
        setIssn(e.currentTarget.value)
    }

    let clickSearch = async () => {
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
            
        } else {
            let jsonData = await response.json();
            setMessage(jsonData.error+": "+issn)
        }
    }


    return (
       
        <div className="search-form">
        <h1>Acuerdos Transformativos UniOvi</h1>
        <hr className="hr-media"/>
            <div className="ph2">
            <p>Encuentra una revista participante</p>
            </div>
        <input type="text" className="search-input" placeholder="Encuentra una revista por ISSN" onChange={onChangeIssn}/>
        <button onClick={() => {clickSearch()}} className="search-button">Buscar</button>
        <div>{message}</div>
            <div className="p">
                 <p>Crue Universidades Españolas y el Consejo Superior de Investigaciones Científicas han alcanzado acuerdos transformativos de sus licencias de suscripción con las editoriales Elsevier, Wiley, Springer Nature y American Chemical Society con el objetivo de avanzar en una socialización del conocimiento mediante un creciente acceso libre al mismo.
                 </p>
                 <p> Gracias a estas negociaciones, los investigadores e investigadoras de ambas instituciones podrán seguir accediendo a la lectura y descarga de los artículos científicos de las revistas suscritas y publicar más artículos en abierto, sin costes adicionales. Estos acuerdos permitirán que más investigaciones españolas sean leídas, citadas y desarrolladas.
                </p>
               
            </div>
           
        </div>


    )

    
}

export default SearchComponent;