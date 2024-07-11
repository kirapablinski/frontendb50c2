import { addDoc, collection, getDocs } from "firebase/firestore";
import {db} from "./Firebase";
import { Persona } from "@/interface/iPersona";

export const registrarPersona = async(persona:Persona)=>{
    const docRef = await addDoc(collection(db,"personas"),persona);
}
export const obtenerPersona = async()=>{
    let personas:Persona[] = []
    const querySnapshot = await getDocs(collection(db,"personas"));
    querySnapshot.forEach((doc)=>{
        let persona:Persona = {
            rut:doc.data().rut,
            apellido:doc.data().apellido,
            correo:doc.data().correo,
            edad:doc.data().edad,
            fechadenacimiento:doc.data().fechadenacimiento,
            nombre:doc.data().nombre
        }
        personas.push(persona)
    });
    return personas
}