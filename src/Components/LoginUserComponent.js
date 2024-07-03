import { Card, Input, Row, Col, Button, Alert, notification} from "antd";
import { useRef, useState, useEffect } from "react";
import { backendURL } from "../Globals";
import { Navigate, json } from "react-router-dom";
import { useNavigate } from "react-router-dom";



let LoginUserComponent = (props) => {


    let { setLogin } = props;


    let email = useRef(null)
    let password = useRef(null)
    let [message, setMessage] = useState ("");
    const navigate = useNavigate();

  

    let clickLogin = async () => {
        let response = await fetch(backendURL+"/users/login",{
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify({
                email: email.current.input.value,
                password: password.current.input.value
            })
        })

        if (response.ok){
            let jsonData = await response.json();
            

            if (jsonData.apiKey != null){
                localStorage.setItem("apiKey", jsonData.apiKey)
            }

            
            setLogin(true)
            navigate("/dashboards")

        } else {
            let jsonData = await response.json("");
            setMessage(jsonData.error)
        }
    } 


    return (
        
        <Row align="middle" justify="center" style={{minHeight: "70vh"}}>
            <Col>
            { message != "" && <Alert type="error" message={message}/>}
                <Card title="Login" style={{ width: "500px"}}>
                    <Input ref={email} size="large" type="text" placeholder= "tu correo"></Input>
                    <Input ref={password} size="large" type="password" style={{marginTop: "5px"}} placeholder= "tu contraseña"></Input>
                     <Button type="primary" style={{marginTop: "10px"}} onClick={clickLogin} block>Login</Button>
                </Card>
            </Col>
         </Row>  
         
    )
}

export default LoginUserComponent;