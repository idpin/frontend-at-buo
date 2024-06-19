import { Card, Input, Row, Col, Button, DatePicker, Form} from "antd";
import { useRef, useState } from "react";
import { backendURL } from "../Globals";
import dayjs from 'dayjs';
const dateTimestamp = dayjs('2024-01-01').valueOf();
const onFinish = (values) => {
  console.log('Success:', values);
};



let AddComponent = () => {
let [article, setArticle] = useState({})
let [message, setMessage] = useState("");
    
    let titulo = useRef(null)
    let doi = useRef(null)
    let doiUrl = useRef(null)
    let idioma = useRef(null)
    let fechaEnvio = useRef(null)
    let fechaAceptacion = useRef(null)
    let autorLikeEditor = useRef(null)
    let autorLikePortal = useRef(null)
    let departamento = useRef(null)
    let ramaDepartamento = useRef(null)
    let tipologia = useRef(null)
    let editor = useRef(null)
    let revista = useRef(null)
    let pIssn = useRef(null)
    let eIssn = useRef(null)
    let modelOa = useRef(null)
    let licencia = useRef(null)
    let fechaSolicitud = useRef(null)
    let fechaAprobacion = useRef(null)
    let diasPendiente = useRef(null)
    let precio = useRef(null)
    let idFinanciador = useRef(null)
    let financiador = useRef(null)
    let periodo = useRef(null)

    //let changeProperty = (propertyName, e) => {
     //let ArticleNew = { ...article, [propertyName] : e.currentTarget.value }
       //setArticle(ArticleNew)
    //}

    let clickCreate = async () => {


<Form
    name="getValueProps"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      date: dateTimestamp,
    }}
    onFinish={onFinish}
    autoComplete="off"
  ></Form>

        let response = await fetch(backendURL+"/articles?apiKey="+localStorage.getItem("apiKey"), {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify({
                titulo: titulo.current.input.value,
                doi: doi.current.input.value,
                doiUrl: doiUrl.current.input.value,
                fechaEnvio: fechaEnvio.current.input.value,
                idiomadioma: idioma.current.input.value,
                fechaAceptacion: fechaAceptacion.current.input.value,
                autorLikeEditor: autorLikeEditor.current.input.value,
                autorLikePortal: autorLikePortal.current.input.value,
                departamento: departamento.current.input.value,
                ramaDepartamento: ramaDepartamento.current.input.value,
                tipologia: tipologia.current.input.value,
                editor: editor.current.input.value,
                revista: revista.current.input.value,
                pIssn: pIssn.current.input.value,
                eIssn: eIssn.current.input.value,
                modelOa: modelOa.current.input.value,
                licencia: licencia.current.input.value,
                fechaSolicitud: fechaSolicitud.current.input.value,
                fechaAprobacion: fechaAprobacion.current.input.value,
                diasPendiente: diasPendiente.current.input.value,
                precio: precio.current.input.value,
                idFinanciadorfinanciador:  financiador.current.input.value,
                financiador: idFinanciador.current.input.value,
                periodo: periodo.current.input.value
               
            })
        })

        if (response.ok){
            
        } else {

        }
    }


    return (
        <Row align="middle" justify="center" style={{minHeight: "70vh", paddingTop: "2cm"}}>
            <Col>
         {message != "" && <h3>{ message }</h3>}   
        <Card title="Añadir nuevo artículo aceptado" style={{ width: "500px"}}>
            <Input ref={titulo} size="large" type="text" placeholder= "Título"></Input>
            <Input ref={doi} size="large" type="text" style={{marginTop: "10px"}} placeholder= "DOI"></Input>
            <Input ref={doiUrl} size="large" type="text" style={{marginTop: "10px"}} placeholder= "URL DOI"></Input>
            <Input ref={fechaEnvio} size="large" type="text" style={{marginTop: "10px"}}  placeholder= "Fecha de envío"></Input>
            <Input ref={fechaAceptacion} size="large" type="text" style={{marginTop: "10px"}}  placeholder= "Fecha de aceptación"></Input>
            <Input ref={idioma} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Idioma"></Input>
            <Input ref={autorLikeEditor} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Autor según editor"></Input>
            <Input ref={autorLikePortal} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Autor Normalizado"></Input>
            <Input ref={departamento} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Departamento"></Input>
            <Input ref={ramaDepartamento} size="large" type="text" style={{marginTop: "10px"}} placeholder= "rama del departamento"></Input>
            <Input ref={tipologia} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Tipología"></Input>
            <Input ref={editor} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Editor"></Input>
            <Input ref={revista} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Revista"></Input>
            <Input ref={pIssn} size="large" type="text" style={{marginTop: "10px"}} placeholder= "print ISSN"></Input>
            <Input ref={eIssn} size="large" type="text" style={{marginTop: "10px"}} placeholder= "electronic ISSN"></Input>
            <Input ref={modelOa} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Modelo OA"></Input>
            <Input ref={licencia} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Licencia creative commons"></Input>
            <Input ref={fechaSolicitud} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Fecha de solicitud"></Input>
            <Input ref={fechaAprobacion} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Fecha de aprobación"></Input>
            <Input ref={diasPendiente} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Días pendiente"></Input>
            <Input ref={precio} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Precio"></Input>
            <Input ref={idFinanciador} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Financiador"></Input>
            <Input ref={financiador} size="large" type="text" style={{marginTop: "10px"}} placeholder= "id del Financiador"></Input>
            <Input ref={periodo} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Periodo"></Input>

            <Button type="primary" style={{marginTop: "10px"}}
            onClick={clickCreate}
            
            block>Añadir</Button>
        </Card>
        </Col>
    </Row>  
    )
}

export default AddComponent;