import { obtenerPersona } from '@/Firebase/Promesas'
import { Persona } from '@/interface/iPersona'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

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
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                {
                    personas.map((p)=>{
                        return(
                            <tr>
                                <td>{p.nombre}</td>
                                <td>{p.apellido}</td>
                                <td>{p.rut}</td>
                                <td>{p.correo}</td>
                                <td>{p.fechadenacimiento}</td>
                                <td>{p.edad}</td>
                                <td>
                                    <Link href={{pathname:'Pagina5',query:{key:p.key}}}>
                                    <Button variant='warning'><FaUserEdit />Editar</Button>
                                    </Link>
                                    
                                    <Button variant='danger'><MdDeleteForever />Eliminar</Button>
                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </Table>
    </>
  )
}
export default Pagina4