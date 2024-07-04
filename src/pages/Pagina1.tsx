import exp from 'constants'
import React, { useState } from 'react'
import  Form  from 'react-bootstrap/Form'

import { Button } from 'react-bootstrap'

export const pagina1 = () => {
  const [nombre, setnombre]= useState('Joselito')
  const [apellido, setapellido]= useState('Perez')
  const [errorNombre,setErrorNombre] = useState('')
  const validarnombre= (valor:string)=>{
    if (valor.length>3){
      setErrorNombre("");
    }else{
      setErrorNombre("Debe ingresar 4 caracteres como minimo")
    }
    setnombre(valor);
  }
  const handleRegistrar = ()=>{
    console.log("se registro con exito");
    alert("listo "+nombre+" "+apellido);
  }


  return (
    <>
    <h1>Bienvenido {nombre} {apellido}</h1>
    <p>{errorNombre}</p>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type='text' placeholder='Ingrese un nombre' onChange={(e)=>validarnombre(e.currentTarget.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicApellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type='text' placeholder='Ingrese un apellido' onChange={(e)=>setapellido(e.currentTarget.value)}/>
      </Form.Group>
      <Button variant='primary' type='button' onClick={handleRegistrar}>Registrar</Button>
    </Form>
    
    
    </>
  )
}
export default pagina1