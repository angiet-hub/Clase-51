// Hacer ejercicios de estudiantes acá

/* que tome por parámetro el nombre de un hechizo y un array de estudiantes y devuelva un array con todos les 
estudiantes que tengan ese hechizo como hechizoPreferido */

const estudiantesPorHechizo = (estudiantes, hechizo) => {
    const porHechizo = estudiante => estudiante.hechizoPreferido === hechizo
    return estudiantes.filter(porHechizo)
}


/*que tome por parametro un numero y un array de estudiantes y devuelva un array con todos les estudiantes que 
tengan un número de amigues mayor o igual a el número pasado por parámetro */

const estudiantesConMasAmiguesQue = (estudiantes, x) => {
    const masAmigues = estudiante => estudiante.amigues.length >= x
    return estudiantes.filter(masAmigues)
}


/*que tome por parámetro un array con nombres de familiares (p.ej, ["Sapo", "Lechuza"]) y un array de estudiantes 
y devuelva un array con les estudiantes que tengan cuyo familiar sea alguno de los incluidos en el parámetro/*/

const estudiantesConFamiliares = (estudiantes, familiares) => {
    const incluyeFamiliar = estudiante => estudiante.familiar.includes(familiares)
    return estudiantes.filter(incluyeFamiliar)
}


// obtenerPromedioDeEstudiante, que tome por parámetro une estudiante (que se saca del array estudiantes) y 
//devuelva el promedio total de todas las materias

const obtenerPromedioDeEstudiante = estudiante => {
    const aPromedio = materia => materia.promedio;
    const sumaDePromedios = (sumaParcial, promedio) => sumaParcial + promedio; // da un numero con la suma de los promedios del array anterior

    return estudiante.materias.map(aPromedio).reduce(sumaDePromedios) / estudiante.materias.length 
}


/* estudiantesConPromedioMayorA, que tome por parámetro un número y un array de estudiantes y devuelva un array con 
les estudiantes que tengan un promedio total mayor a dicho número (usar la función anterior) */

const estudiantesConPromedioMayorA = (x, estudiantes) => {
    const mayorA = estudiante => obtenerPromedioDeEstudiante(estudiante) > x 
    return estudiantes.filter(mayorA)
}


/* mejoresEstudiantesPorCasa, que tome por parámetro el nombre de una casa y un array de estudiantes y devuelva les 
estudiantes de dicha casa cuyo promedio total es mayor a 6 */

const mejoresEstudiantesPorCasa = (casa, estudiantes) => {
    const porCasa = estudiante => estudiante.casa === casa
    const porPromedio = estudiante => obtenerPromedioDeEstudiante(estudiante) > 6
    return estudiantes
    .filter(porCasa)
    .filter(porPromedio)
}


/* casaConMejoresEstudiantes, que tome por parámetro un array de estudiantes y devuelva el nombre de la casa que 
tiene más cantidad de estudiantes con promedio total mayor a 6 (usar la función anterior)
 */

const casaConMejoresEstudiantes = estudiantes => {
    const ravenclaw = mejoresEstudiantesPorCasa("Ravenclaw", estudiantes).length
    const gryffindor = mejoresEstudiantesPorCasa("Gryffindor", estudiantes).length
    const slytherin = mejoresEstudiantesPorCasa("Slytherin", estudiantes).length
    const hufflepuff = mejoresEstudiantesPorCasa("Hufflepuff", estudiantes).length

    const array = [ravenclaw, gryffindor, slytherin, hufflepuff]

    const arrayReduce = (masEstudiantes, casa) => casa > masEstudiantes ? casa : masEstudiantes
    return array.reduce(arrayReduce)
}


/* estudiantesPorMateriaAprobada, que tome por parámetro el nombre de una materia y un array de estudiantes y 
devuelva una array con les estudiantes que tienen en dicha materia un promedio superior a 6*/
//NO SALIO

const estudiantesPorMateriaAprobada = (materia,estudiantes) => {
    const porMateria = estudiante => estudiante.materias.nombre === materia
    const porPromedio = estudiante => estudiante.materias.promedio > 6

    return estudiantes.filter(porMateria).filter(porPromedio)
}


/* obtenerInfoResumida, que tome por parámetro un array de estudiantes y devuelva un array con objetos, habiendo un 
objeto por estudiante, donde cada objeto tiene las siguientes propiedades: nombre, casa, promedio, amigues (cantidad)
 */

const obtenerInfoResumida = estudiantes => {
    const obtenerInfo = estudiante => {
    const infoResumida = {}
    infoResumida.nombre = estudiante.nombreCompleto.nombre
    infoResumida.casa = estudiante.casa
    infoResumida.promedio = obtenerPromedioDeEstudiante(estudiante)
    infoResumida.amigues = estudiante.amigues.length
    return infoResumida
    }

    return estudiantes.map(obtenerInfo)
}


// que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las casas como propiedades
// y la cantidad de estudiantes por casa (no debe contar amigues)

const cantidadDeEstudiantesPorCasa = estudiantes => {
    const cantidadPorCasa = (cuentaParcial, estudiante) => {
        cuentaParcial[estudiante.casa] = cuentaParcial[estudiante.casa] + 1 || 1
        return cuentaParcial
    }
  
    // * lo que definimos como 2do parámetro, se pasa como 1er parámetro del callback de reduce
  
    return estudiantes.reduce(cantidadPorCasa, {})
  }
  
  console.log(cantidadDeEstudiantesPorCasa(estudiantes))
  

/* cantidadDeEstudiantesPorMateriaAprobada, que tome por parámetro un array de estudiantes y devuelva un objeto 
con los nombres de las materias como propiedades y la cantidad de estudiantes que aprobaron dicha materia 
(promedio superior a 6) */

const aNombreDeMateria = materia => materia.nombre

const materiaAprobada = materia => materia.promedio > 6

const aMateriasAprobadas = (resultadoParcial, materia) => { // * string del nombre
  resultadoParcial[materia] = resultadoParcial[materia] + 1 || 1
  return resultadoParcial
}

const aprobadesPorMateria = (totalGeneralParcial, estudiante) =>  
  estudiante.materias           // obtenemos el array de materias
    .filter(materiaAprobada)    // filtramos las materias aprobadas
    .map(aNombreDeMateria)      // nos quedamos con un array con los 
                                // nombres de las materias
    .reduce(aMateriasAprobadas, totalGeneralParcial)

const cantidadDeEstudiantesPorMateriaAprobada = estudiantes => 
  estudiantes.reduce(aprobadesPorMateria, {}) // reduce el array de estudiantes a un objeto con materias y cantidad de aprobades -> RESULTADO FINAL

console.log(cantidadDeEstudiantesPorMateriaAprobada(estudiantes))

/* promedioPorMateria, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las
 materias como propiedades y el promedio total de dicha materia entre todes les estudiantes (suma de todos los 
    promedios divido la cantidad de estudiantes) */

// familiarPreferido, que tome por parámetro un array de estudiantes y devuelva el familiar que más estudiantes tienen
