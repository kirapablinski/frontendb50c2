import exp from 'constants'
import React, { useState } from 'react'
import  Form  from 'react-bootstrap/Form'

import { Button } from 'react-bootstrap'

export const pagina2 = () => {
  const [numero1, setnumero1]= useState(0)
  const [numero2, setnumero2]= useState(0)
  const [resultado, setresultado]= useState(0)
  const getN1 = (valor:string) =>{
    const n1 = parseInt(valor);
    setnumero1(n1);
  }
  const getN2 = (valor:string) =>{
    const n2 = parseInt(valor);
    setnumero2(n2);
  }
  const handleSumar = ()=>{
    const t = numero1 + numero2
    setresultado(t)
  }

  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type='text' placeholder='Ingrese un numero' onChange={(e)=>getN1(e.currentTarget.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicApellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type='text' placeholder='Ingrese un numero' onChange={(e)=>getN2(e.currentTarget.value)}/>
      </Form.Group>
      <Button variant='primary' type='button' onClick={handleSumar}>Registrar</Button>
      <Form.Group className="mb-3" controlId="formBasicResultado">
        <Form.Label>Resultado</Form.Label>
        <Form.Control type='text' value={resultado}/>
      </Form.Group>
    </Form>
    
    
    </>
  )
}
export default pagina2