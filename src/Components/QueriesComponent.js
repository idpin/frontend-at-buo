import React, { useRef } from 'react';
import { Card} from 'antd';
import '../formulario.css'; 
import emailjs from '@emailjs/browser';



let QueriesComponent = () => {

const refForm = useRef ();
const handleSubmit = (event) => {
  event.preventDefault();


    

    const serviceId = "service_9rozr98";
    const templateId = "template_1zls6hf";

    const apiKey = "CtKifjzkEF73ND7Nq"

    emailjs.sendForm (serviceId, templateId, refForm.current, apiKey)
    .then ( result => console.log(result.text))
    .catch( error => console.error(error))
}
   
return (
<div style={{paddingTop: '3cm', width: '50%', textAlign:'center'}}>
<Card align="middle" justify="center" style={{minHeight: "40vh", }}>


<form ref={refForm} action=''onSubmit={handleSubmit}>
   
    <fieldset>
        <label htmlFor=''>Nombre</label>
        <input name= 'username'type="text" id="lname" placeholder="" required/>
    </fieldset>

    <fieldset >
    
    <label for="lname">Email</label>
    <input type="text" id="lname" name="lastname" placeholder=""></input>
    </fieldset>


    
    <fieldset >
        <label >Mensaje</label>
        <textarea maxLength="500" placeholder='' name='message' id='' cols="30" rows="" requerid></textarea>
    </fieldset>
    
<div style={{textAlign:'center'}}>
<button className='button' >Enviar</button>
</div>
</form>

    
</Card>
</div>
)}


export default QueriesComponent;
