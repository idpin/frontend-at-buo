import { useState } from "react";

import { backendURL } from "../Globals";

let SearchComponent = (props) => {

    let [issn, setIssn] = useState("");

    let ChangeIssn = (e) => {
        setIssn(+e.currentTarget.value)
    }

    let clickSearch = async () => {
        let response = await fetch(backendURL+"/search"+issn, {
            headers: { "Content-Type": "application(json" },
            params : JSON.stringify({ 
                issn
            })
        })
        
        if ( response.ok ){
            let jsonData = await response.json();
        }
    }


    return (
        <div className="search-form">
            <h2>Encuentra una revista participante</h2>
            <input type="text" className="search-input" placeholder="issn" onChange={ChangeIssn}/>
            <button onClick={() => {clickSearch(3)}} className="search-button">Search</button>
        </div>
    )
}

export default SearchComponent;