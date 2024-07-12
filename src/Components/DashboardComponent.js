import { Card, Col, Row, Button, Flex, Image, Statistic } from "antd";
import elsevier from '../elsevier.png';
import springer from '../springer.png';
import wiley from '../wiley.png';
import ccc from '../ccc.png';


let DashboardComponent = () => {

//cuidado con las contraseñas aquí. Esto es un problema de seguridad; el frontend se ejecuta en el navegador del cliente. ¿No debería estar en el backend?

    return (
      
<Row style={{ paddingTop: '2cm'}} gutter={16}>
        <Col span={8}>
          <Card size="default" title="Elsevier Open Access Platform" bordered={false}>
          <img style={{marginBottom: '1cm'}}
    width={200}
    src={elsevier}  />
      
                <p>
    <Button type="primary" danger
    href="https://oap.elsevier.com/s/" 
            >Acceder
    </Button>
  </p>
                
          </Card>
        </Col>
        <Col span={8}>
          <Card size="default" title="Springer Article Approval Service" bordered={false}>
          <img style={{marginBottom: '1cm'}}
    width={200}
    src={springer}  />
                 <p><Button type="primary" danger
    href="https://idp-personal-authenticator.springernature.com/gateway?response_type=code&redirect_uri=https%3A%2F%2Fidp.springernature.com%2Fauthed%2Fpersonal&state=eyJjdHkiOiJKV1QiLCJlbmMiOiJBMTI4R0NNIiwiYWxnIjoiZGlyIn0..8JnIGFtrEU4tbU7N.1-H1KB5PjDI6SGwQjClgs6aVwky1XYqyzl8sVdgXCkpN3CNaEKhHPDFVzqaidaszSoREnB4XhFedKKP2wsXQzjBHtVyhs3PaFKoIil0A2EtvetKLpOLBmckxWiqgVjOtSkJ52awic-xeRBZjwAsPuBbyTU34KuoPtnw4nzMogJbvi_4MpmB9uDv57B_Y543VtCz5OtNwoXRFpnQFrGNJKuWNmYBKdykx4fEIfOZodnUjRucvOmCtqmUnfKCdg474XDsrj-sqocTmxocSqTScj7KT9d9pH8svFd2PqrDXgx-JRCBSAXHrofEnbc18AxMZnpS1yfgOW-4b_cm3Froc9AgD1DurHylNpD0PYy_tDfXkUwb8fWUgEKqr5x8H5OMuKbYQsaAe8xUaqLeyA4VmUfQvsA0pOq8gtGA0wr657KlBvmFnQ0Klqm3jXnYs4hMCqTVAWVSzXy0tbQabpjP4FW7tq-SlYB5U29zVFVITcrCM8ELjY5YbvTGYjg3600PI1ic7KJ1KNe3rPjUot4Fk3wKHz6BsGdA6he59ADSyexVh9kzv5EPqMan93n0QMeAKiWoORkoIgW26SR5_y7q3yWGvGBx02c_xmJStUxqNsgfLj4eK9Xi0Yom6XK8ZgEWgxyrPhAPa3I831Glqb9oyagLfM4fyb6guiUaDs0Q1jv4ZczWdX7ukC09J8ClMkB0QkuGV1oxeSF-sCDjHAbGTrL-zDNkofD3kcOYEnRybbJQkndmyS5bMIMI.aoV3X-kFUeE_yC88rlICrw&target_redirect_uri=http%3A%2F%2Foa-approval.springernature.com%2F&context_type=Unable+to+load+because%3A+IdpProtocolError%28message%3DMissing+user+info%21%29" 
            >Acceder
    </Button></p>
                 
          </Card>
        </Col>
        <Col span={8}>
          <Card size="default" title="Wiley Oable" bordered={false}>
                
          <img style={{marginBottom: '1cm'}} 
    width={200}
    src={wiley}  />
                 <p> <Button type="primary" danger
    href="https://id.knowledgeunlatched.org/auth/realms/ku/protocol/openid-connect/auth?response_type=code&redirect_uri=https%3A%2F%2Fapp.oable.org%2Fauth%2Fkeycloak%2Fcallback&scope=openid&client_id=cockpit"
            >Acceder
    </Button></p>
                 
          </Card>
        </Col>
        <Col span={8}>
          <Card size="default" title="CCC RightsLink Institutional Portal" bordered={false}>
          <img style={{marginBottom: '1cm'}}
    width={200}
    src={ccc}  />
                <p> <Button type="primary" danger
    href="https://sso.copyright.com/cas/login?service=https%3A%2F%2Fapcfunding.copyright.com%2Fapc-instportal-ui%2Fj_spring_cas_security_check#764f6c53-1e4c-476c-ac15-7ec8b3a17d24/funding-requests"
            >Acceder
    </Button></p>
                 
          </Card>
        </Col>
    </Row>
    
    )
}



export default DashboardComponent;

