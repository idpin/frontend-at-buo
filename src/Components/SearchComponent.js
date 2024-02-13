import { useState } from "react";

import { backendURL } from "../Globals";

let SearchComponent = (props) => {

    let [issn, setIssn] = useState("");


    let onChangeIssn = (e) => {
        setIssn(+e.currentTarget.value)
    }

    let clickSearch = async () => {
        let response = await fetch(backendURL+"/journals", [issn], {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            params : JSON.stringify({
                issn: issn
            })
        
        })
      
    
        if ( response.ok ){
            let jsonData = await response.json();
        }
      
    }


    return (
        <div className="search-form">
            <h2>Encuentra una revista participante</h2>
            <input type="text" className="search-input" placeholder="issn" onChange={onChangeIssn}/>
            <button onClick={() => {clickSearch(3)}} className="search-button">Search</button>
        </div>
    )
}

export default SearchComponent;