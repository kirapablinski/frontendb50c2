import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
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
            fechadenacimiento:doc.data().fechanacimiento,
            nombre:doc.data().nombre,
            key:doc.id
        }
        personas.push(persona)
    });
    return personas
}
export const obtenerPerson = async(key:string)=>{
    const docRef = doc(db,"personas",key);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
        let persona:Persona = {
            rut:docSnap.data().rut,
            apellido:docSnap.data().apellido,
            correo:docSnap.data().correo,
            edad:docSnap.data().edad,
            fechadenacimiento:docSnap.data().fechanacimiento,
            nombre:docSnap.data().nombre,
            key:docSnap.id
    }
        return persona
    }else{
        return undefined
    }
}