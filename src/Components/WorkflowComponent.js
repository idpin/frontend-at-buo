let WorkflowComponent = () => {


    return (

<div style={{paddingLeft: '7cm', paddingRight: '7cm', paddingTop: '1.5cm'}}>
<h2 className='pr11' style={{paddingBottom: '0.1cm', textAlign:'left'}}>El procedimiento de solicitud de financiación es más o menos igual para todos los editores:</h2>
       
       
        <h2 className='pr1' style={{paddingBottom: '0.1cm', textAlign:'left'}}>1. Aceptación del artículo</h2>
        <p className="pr">La solicitud de financiación se pedirá una vez que la revista haya aceptado nuestro artículo para su publicación</p>
      
        <h2 className='pr1' style={{paddingBottom: '0.1cm', textAlign:'left'}}>2. Correo electrónico del editor</h2>
        <p className="pr">Cuando la revista haya aceptado nuestro artículo, el editor nos enviará un correo con un enlace que da comienzo a lo que llaman "viaje del autor"</p>
       
        <h2 className='pr1' style={{paddingBottom: '0.1cm', textAlign:'left'}}>3. Filiación Universidad de Oviedo</h2>
        <p className="pr">Dentro de la plataforma de gestión del autor, lo más importante es elegir como filiación la Universidad de Oviedo; de lo contrario el editor no podrá enviar la solicitud de financiación para aplicar el acuerdo transformativo</p>
        
        <h2 className='pr1' style={{paddingBottom: '0.1cm', textAlign:'left'}}>4. Publish Open Access</h2>
        <p className="pr">De todas las opciones para publicar, eligiremos la opción de publicarlo en acceso abierto</p>

        <h2 className='pr1' style={{paddingBottom: '0.1cm', textAlign:'left'}}>5. Licencia Creative Commons</h2>
        <p className="pr">Al elegir la opción anterior tendremos que seleccionar una licencia creative commons para proteger nuestros derechos de propiedad intelectual. Hay dos opciones: que podamos definir los usos permitidos según nuestras preferencias o que estemos obligados a seleccionar la única que permita el editor</p>

        <h2 className='pr1' style={{paddingBottom: '0.1cm', textAlign:'left'}}>6. Aprobación BUO</h2>
        <p className="pr">Cuando el autor elija como filiación la Universidad de Oviedo y la opción de acceso abierto el editor comprobará si existe acuerdo transformativo con su institución y si lo hay enviará a la Universidad la solicitud de financiación. En la UniOvi es la Biblioteca Universitaria la que se encarga de aprobar las solicitudes</p>

        <h2 className='pr1' style={{paddingBottom: '0.1cm', textAlign:'left'}}>7. Notificación automática</h2>
        <p className="pr">Una vez que la BUO aprueba una solicitud a través de los diferentes dashboards de los editores, estos envían un correo electrónico automático al autor/a informando de que su institución ha aprobado la solicitud</p>


        <p className="pr11">Recibida dicha notificación el autor/a ya no tiene que hacer nada más, salvo que estemos ante un descuento (20% o 10%) del total de los APCs, en cuyo caso se recibirá una factura ya con el descuento aplicado y el autor/a tendrá que pagarla por su cuenta.</p>

        
       
    </div>
    )

}

export default WorkflowComponent;