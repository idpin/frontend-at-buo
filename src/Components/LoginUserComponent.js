import { Card, Input, Row, Col, Button, Alert, notification} from "antd";
import { useRef, useState, useEffect } from "react";
import { backendURL } from "../Globals";
import { Navigate, json } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Form } from 'antd';


let LoginUserComponent = (props) => {

    
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

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
      
    <Row className='cajas-centradas'>
       <Col>
       { message != "" && <Alert type="error" message={message}/>}
    <Card  style={
        {
            width: '350px'
        }
    }>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
              >
                <Input ref={email}
                prefix={<UserOutlined className="site-form-item-icon" />} 
                placeholder="Username" 
                type="username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                
                <Input ref={password} 
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
        
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>
        
              <Form.Item>
                <Button onClick={clickLogin}
                type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <a href="">register now!</a>
              </Form.Item>
            </Form>
        </Card>
     </Col>
    </Row>














       
    )
}

export default LoginUserComponent;