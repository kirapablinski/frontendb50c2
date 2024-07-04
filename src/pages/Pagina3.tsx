import React, { useState } from 'react'
import Form from 'react-bootstrap/form'
import  Button  from 'react-bootstrap/Button'

interface Persona{
    nombre:string,
    apellido:string,
    rut:string,
    edad:number,
    fechadenacimiento:string,
    correo:string
}
const initialState:Persona = {
    apellido:"",
    correo:"",
    edad:0,
    fechadenacimiento:"",
    nombre:"",
    rut:""
}

export const Pagina3 = () => {
    const [persona, setPersona] = useState<Persona>(initialState)

    const handlePersona = (name:string,value:string)=>{
        setPersona({...persona,[name]:value})
    }
    
  return (
    <>
    <Form>
       <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type='text' placeholder='Ingrese nombre: ' name='nombre' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>Apellido</Form.Label>
        <Form.Control type='text' placeholder='Ingrese apellido: ' name='apellido' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>Correo</Form.Label>
        <Form.Control type='email' placeholder='Ingrese correo' name='correo' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>Edad</Form.Label>
        <Form.Control type='number' placeholder='ingrese edad: ' name='edad' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control type='date' placeholder='Ingrese su fecha de nacimiento' name='fechanacimiento' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
       <Form.Group>
        <Form.Label>RUT</Form.Label>
        <Form.Control type='text' placeholder='Ingrese su RUT' name='rut' onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
        <Form.Text></Form.Text>
        </Form.Group> 
        <Button type='button' variant='success'>Registrar</Button>
    </Form>
    </>
  )
}
export default Pagina3