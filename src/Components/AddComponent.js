import { Card, Input, Row, Col, Button, DatePicker, Form} from "antd";
import { useRef } from "react";
import { backendURL } from "../Globals";
import dayjs from 'dayjs';
const dateTimestamp = dayjs('2024-01-01').valueOf();
const onFinish = (values) => {
  console.log('Success:', values);
};



let AddComponent = () => {
    //let [article, setArticle] = useState({})
    
    let title = useRef(null)
    let doi = useRef(null)
    let doiUrl = useRef(null)
    let fechaAceptacion = useRef(null)
    let autor = useRef(null)
    let departamento = useRef(null)
    let facultad = useRef(null)
    let tipologia = useRef(null)
    let editor = useRef(null)
    let revista = useRef(null)
    let issn = useRef(null)
    let eIssn = useRef(null)
    let modelOa = useRef(null)
    let fechaSolicitud = useRef(null)
    let fechaAprobacion = useRef(null)
    let diasPendientes = useRef(null)
    let precio = useRef(null)
    let financiador = useRef(null)
    let idFinanciador = useRef(null)
    let periodo = useRef(null)

    //let changeProperty = (propertyName, e) => {
      //  let ArticleNew = { ...article, [propertyName] : e.currentTarget.value }
       // setArticle(ArticleNew)
    //}
//?apiKey="+localStorage.getArticles faltaría esto para que sepa que estamso logueados? estamos en el formulario porque ya nos logueamos antes no? OJO falta esto 100% porque si no sabiendo la url /add se puede acceder al formulario sin login 
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

        let response = await fetch(backendURL+"/articles", {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify({
                title: title.current.input.value,
                doi: doi.current.input.value,
                doiUrl: doiUrl.current.input.value,
                fechaAceptacion: fechaAceptacion.current.input.value,
                autor: autor.current.input.value,
                departamento: departamento.current.input.value,
                facultad: facultad.current.input.value,
                tipologia: tipologia.current.input.value,
                editor: editor.current.input.value,
                revista: revista.current.input.value,
                issn: issn.current.input.value,
                eIssn: eIssn.current.input.value,
                modelOa: modelOa.current.input.value,
                fechaSolicitud: fechaSolicitud.current.input.value,
                fechaAprobacion: fechaAprobacion.current.input.value,
                diasPendientes: diasPendientes.current.input.value,
                precio: precio.current.input.value,
                financiador:  financiador.current.input.value,
                idFinanciador: idFinanciador.current.input.value,
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
            
        <Card title="Añadir nuevo artículo aprobado" style={{ width: "500px"}}>
            <Input ref={title} size="large" type="text" placeholder= "Título"></Input>
            <Input ref={doi} size="large" type="text" style={{marginTop: "10px"}} placeholder= "DOI"></Input>
            <Input ref={doiUrl} size="large" type="text" style={{marginTop: "10px"}} placeholder= "URL DOI"></Input>
            <Input ref={fechaAceptacion} size="large" type="text" style={{marginTop: "10px"}}  placeholder= "Fecha de aceptación"></Input>
            <Input ref={autor} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Autor"></Input>
            <Input ref={departamento} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Departamento"></Input>
            <Input ref={facultad} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Facultad"></Input>
            <Input ref={tipologia} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Tipología"></Input>
            <Input ref={editor} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Editor"></Input>
            <Input ref={revista} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Revista"></Input>
            <Input ref={issn} size="large" type="text" style={{marginTop: "10px"}} placeholder= "ISSN"></Input>
            <Input ref={eIssn} size="large" type="text" style={{marginTop: "10px"}} placeholder= "e-ISSN"></Input>
            <Input ref={modelOa} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Modelo OA"></Input>
            <Input ref={fechaSolicitud} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Fecha de solicitud"></Input>
            <Input ref={fechaAprobacion} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Fecha de aprobación"></Input>
            <Input ref={diasPendientes} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Días pendiente"></Input>
            <Input ref={precio} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Precio"></Input>
            <Input ref={financiador} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Financiador"></Input>
            <Input ref={idFinanciador} size="large" type="text" style={{marginTop: "10px"}} placeholder= "id del Financiador"></Input>
            <Input ref={periodo} size="large" type="text" style={{marginTop: "10px"}} placeholder= "Período"></Input>

            <Button type="primary" style={{marginTop: "10px"}}
            onClick={clickCreate}
            
            block>Añadir</Button>
        </Card>
        </Col>
    </Row>  
    )
}

export default AddComponent;