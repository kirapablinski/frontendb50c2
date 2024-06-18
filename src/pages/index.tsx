import Perfil from "./componentes/Perfil";

export default function Home() {
  return (
    <>
      <p>Hola</p>
      <p>Chao</p>
      <Perfil nombre="Pablo" apellido="Marmol" edad={30} rol="docente"/>
      <Perfil nombre="Jose" apellido="Perez" edad={15} rol="estudiante"/>
    </>
  );
}
