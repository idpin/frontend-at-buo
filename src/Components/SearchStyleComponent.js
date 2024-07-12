import { useEffect, useState } from "react";

import { backendURL } from "../Globals";

import { Table } from "antd"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Select from 'react-select';
import { Checkbox } from 'antd';
import { Card, Input, Form, Button, Layout } from 'antd';


import {  Space, Tooltip, Typography } from 'antd';
const { Option } = Select;
const onFinish = (values) => {
  console.log('Received values of form: ', values);
}

let {Content} = Layout


let SearchStyleComponent = (props) => {

    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Finish:', values);
      };
      const [clientReady, setClientReady] = useState(false);

let [issn,setIssn] = useState("")
let [cuartil,setCuartil] = useState([])
let [medida,setMedida] = useState([])
let [field,setField] = useState(null)
let [jcrq, setJcrq] = useState(null)
let [sjrq, setSjrq] = useState(null)
let [publisher, setPublisher] = useState([])
let [journals, setJournals] = useState ([])
let [message, setMessage] = useState("")

console.log("aquí también");



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

      




  <Form
    name="complex-form"
    onFinish={onFinish}
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item label="Username">
      <Space>
        <Form.Item
          name="username"
          noStyle
          rules={[
            {
              required: true,
              message: 'Username is required',
            },
          ]}
        >
          <Input
            style={{
              width: 160,
            }}
            placeholder="Please input"
          />
        </Form.Item>
        <Tooltip title="Useful information">
          <Typography.Link href="#API">Need Help?</Typography.Link>
        </Tooltip>
      </Space>
    </Form.Item>
    <Form.Item label="Address">
      <Space.Compact>
        <Form.Item
          name={['address', 'province']}
          noStyle
          rules={[
            {
              required: true,
              message: 'Province is required',
            },
          ]}
        >
          <Select placeholder="Select province">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={['address', 'street']}
          noStyle
          rules={[
            {
              required: true,
              message: 'Street is required',
            },
          ]}
        >
          <Input
            style={{
              width: '50%',
            }}
            placeholder="Input street"
          />
        </Form.Item>
      </Space.Compact>
    </Form.Item>
    <Form.Item
      label="BirthDate"
      style={{
        marginBottom: 0,
      }}
    >
      <Form.Item
        name="year"
        rules={[
          {
            required: true,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50% - 8px)',
        }}
      >
        <Input placeholder="Input birth year" />
      </Form.Item>
      <Form.Item
        name="month"
        rules={[
          {
            required: true,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50% - 8px)',
          margin: '0 8px',
        }}
      >
        <Input placeholder="Input birth month" />
      </Form.Item>
    </Form.Item>
    <Form.Item label=" " colon={false}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);



    

  
}

export default SearchStyleComponent;