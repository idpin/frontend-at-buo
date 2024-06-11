import { Card, Input, Row, Col, Button} from "antd";
import { useRef } from "react";
import { backendURL } from "../Globals";
let CreateUserComponent = () => {
    let email = useRef(null)
    let password = useRef(null)

    let clickCreate = async () => {
        let response = await fetch(backendURL+"/users",{
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify({
                email: email.current.input.value,
                password: password.current.input.value
            })
        })

        if (response.ok){
            
        } else {

        }
    }


    return (
        <Row align="middle" justify="center" style={{minHeight: "70vh"}}>
            <Col>
        <Card title="Crear usuario" style={{ width: "500px"}}>
            <Input ref={email} size="large" type="text" placeholder= "tu correo"></Input>
            <Input ref={password} size="large" type="password" style={{marginTop: "10px"}} placeholder= "tu contraseña"></Input>
            <Button type="primary" style={{marginTop: "10px"}}
            onClick={clickCreate}
            
            block>Crear cuenta</Button>
        </Card>
        </Col>
    </Row>  
    )
}

export default CreateUserComponent;