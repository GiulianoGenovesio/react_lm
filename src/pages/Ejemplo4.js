import alumnos from '../data/alumno.json';

const CargaJson = (props) =>{

    //console.log(alumnos)
return(
    <>
    <h1>Ejemplo de carga de Json</h1>
<ul>

{
    alumnos.map(alumno =>(
        <li key={alumno.id}>{alumno.nobre} {alumno.apellido} - {alumno.edad}</li>
    ))
}


</ul>
    </>
)
}

export default CargaJson;