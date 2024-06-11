import elsevier from '../elsevier.png';
import springer from '../springer.png';
import wiley from '../wiley.png';
import acs from '../acs.png';
import rsc from '../rsc.png';
import ieee from '../ieee.png';
import cup from '../cup.png';
import scoap from '../scoap.png';

let AboutComponent = () => {

    return (
        <div style={{paddingLeft: '7cm', paddingRight: '7cm', paddingTop: '1.5cm'}}>
        <h2 className='p1' style={{paddingBottom: '0.5cm', textAlign:'left'}}>¿Qué son los Acuerdos Transformativos?</h2>
        <p className="p">Son los tradicionales contratos firmados por la biblioteca con las editoriales para acceder a grandes paquetes de revistas electrónicas, pero con nuevas condiciones: parte del dinero que se usaba para pagar la suscripción se utiliza ahora para que las editoriales publiquen en acceso abierto investigación uniovi sin cobrar nada a mayores.</p>

        <p className="p">En casi todos los acuerdos hay dos claves: anualmente hay un cantidad limitada de APCs para usar y no entran todas las revistas del catálogo de las editoriales, sino una selección: "revistas elegibles". Hay ocho acuerdos disponibles:</p>
       
        <body className= 'HeaderAnt' style={{textAlign: 'center'}}>
      <img style={{paddingTop:'0.3cm', paddingLeft: '0.9cm'}} src={elsevier} className="App-logo"/>
      <img style={{paddingTop:'0.3cm', paddingLeft: '0.9cm'}} src={springer} className="App-logo"/>
      <img style={{paddingTop:'0.3cm', paddingLeft: '0.9cm'}} src={wiley} className="App-logo"/>
      <img style={{paddingTop:'0.3cm', paddingLeft: '0.9cm'}} src={acs} className="App-logo"/>
   
    
     </body>

     <body className= 'HeaderAnt'style={{textAlign: 'center'}}>
     <img style={{paddingTop:'0.3cm', paddingLeft: '0.9cm'}} src={rsc} className="App-logo"/>
      <img style={{paddingTop:'0.3cm', paddingLeft: '0.9cm'}} src={ieee} className="App-logo"/>
      <img style={{paddingTop:'0.3cm', paddingLeft: '0.9cm'}} src={cup} className="App-logo"/>
      <img style={{paddingTop:'0.3cm', paddingLeft: '0.9cm'}} src={scoap} className="App-logo"/>
   
    
     </body>
        
        
        </div>
    )
}

export default AboutComponent;