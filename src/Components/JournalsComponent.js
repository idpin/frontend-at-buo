import { useEffect, useState } from "react";
import { backendURL } from "../Globals";
import { Table, Button} from "antd"

let JournalsComponent = () => {

    let [journals, setJournals] = useState ([])
    let [message, setMessage] = useState ("")

    useEffect( () => {
        getJournals();
    }, [])

    let getJournals = async () => {
       let response = await fetch(backendURL+"/journals")

       if (response.ok){
            let jsonData = await response.json()
            setJournals(jsonData)
       } else {
            setMessage("Error")
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
        <div>
            <h2>Journals</h2>
            { message != "" && <h3 className="errorMessage">{message}</h3>}
            <Table columns={columns} dataSource={journals}/>
        </div>
    )
}



export default JournalsComponent;