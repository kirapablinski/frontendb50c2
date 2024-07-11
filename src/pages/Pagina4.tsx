import { obtenerPersona } from '@/Firebase/Promesas'
import { Persona } from '@/interface/iPersona'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

export const Pagina4 = () => {
    const [personas,setpersonas] = useState<Persona[]>([])
    useEffect(()=>{
        //traer listado de persona desde promesas
        obtenerPersona().then((personas)=>{
            setpersonas(personas)
        }).catch((e)=>{
            alert("Algo ocurrio.")
        })
    },[])
  return (
    <>
        <Table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Rut</th>
                    <th>Correo</th>
                    <th>Fecha Nacimiento</th>
                    <th>Edad</th>
                </tr>
            </thead>
        </Table>
    </>
  )
}
