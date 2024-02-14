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
            <h2>Encuentra una revista participante</h2>
            <input type="text" className="search-input" placeholder="issn" onChange={onChangeIssn}/>
            <button onClick={() => {clickSearch()}} className="search-button">Buscar</button>
            <div>{message}</div>
        </div>
    )
}

export default SearchComponent;