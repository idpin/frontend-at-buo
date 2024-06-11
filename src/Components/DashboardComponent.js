import { Card, Col, Row } from "antd";
import elsevier from '../elsevier.png';
import springer from '../springer.png';
import wiley from '../wiley.png';
import ccc from '../ccc.png';


let DashboardComponent = () => {

//cuidado con las contraseñas aquí. Esto es un problema de seguridad; el frontend se ejecuta en el navegador del cliente. ¿No debería estar en el backend?

    return (
<Row style={{paddingLeft: '3cm', paddingRight: '3cm', paddingTop: '2cm'}} gutter={16}>
        <Col span={10}>
          <Card title="Elsevier Open Access Platform" bordered={false}>
                <img   src={elsevier} className='App-logo' alt='logo'/>
                <p><a href="https://oap.elsevier.com/s/">Go!</a> </p>
                
          </Card>
        </Col>
        <Col span={10}>
          <Card title="Springer Article Approval Service" bordered={false}>
                 <img src={springer} className='App-logo' alt='logo'/>
                 <p><a href="https://idp.springernature.com/login/adminportal?redirect_uri=http%3A%2F%2Foa-approval.springernature.com%2F">Go!</a></p>
                 
          </Card>
        </Col>
        <Col span={10}>
          <Card title="Wiley Oable" bordered={false}>
                
                 <img  src={wiley} className='Wiley-logo' alt='logo'/> 
                 <p><a href="https://id.knowledgeunlatched.org/auth/realms/ku/protocol/openid-connect/auth?response_type=code&redirect_uri=https%3A%2F%2Fapp.oable.org%2Fauth%2Fkeycloak%2Fcallback&scope=openid&client_id=cockpit">Go!</a></p>
                 
          </Card>
        </Col>
        <Col span={10}>
          <Card className= 'card' title="CCC RightsLink Institutional Portal" bordered={false}>
                <img style={{paddingTop:'0cm'}}src={ccc} className='CCC-logo' /> 
                <p><a href="https://sso.copyright.com/cas/login?service=https%3A%2F%2Fapcfunding.copyright.com%2Fapc-instportal-ui%2Fj_spring_cas_security_check#764f6c53-1e4c-476c-ac15-7ec8b3a17d24/funding-requests">Go!</a></p>
                 
          </Card>
        </Col>
    </Row>
    
    )
}



export default DashboardComponent;

