// Hacer ejercicios de empleades acá

//empleadesQueHacenGuardia, que devuelva un array con todes les empleades que hacen guardia
const empleadesQueHacenGuardia = empleades => empleades.haceGuardia === true;
const haceGuardia = empleades.filter(empleadesQueHacenGuardia)

//empleadesPorPais, que tome por parámetro el nombre de un país y devuelva un array con todes les empleades que son 
//de dicho país
const empleadesPorPais = (empleades, pais) => {
    const paisEmpleades = empleade => empleade.pais === pais;
    return empleades.filter(paisEmpleades)
}

// que tome por parámetro el nombre de un área y devuelva un array con todes les empleades que son de dicho área
const empleadesPorArea = (empleades, area) => {
    const areaEmpleades = empleade => empleade.area === area;
    return empleades.filter(areaEmpleades)
}

// que tome por parámetro un número como sueldo y devuelva un array con todes les empleades que tengan un sueldo 
//mayor a dicho número, ordenados de menor a mayor según sueldo
const empleadesConSueldoMayorA = (empleades, x) => {
    const mayorA = empleade => empleade.sueldo > x
    return empleades.filter(mayorA)
}
// que tome por parámetro un número y devuelva un array con aquelles empleades que sepan más lenguajes que dicho número
const empleadesConMasLenguajes = (empleades, x) => {
    const masLenguajes = empleade => empleade.lenguajes.length > x
    return empleades.filter(masLenguajes)
}

// , que devuelva el sueldo promedio de todos los empleados
const sueldoPromedioEmpleades = (empleades) => {
    const sueldo = empleade => empleade.sueldo
    const promedio = (acumulador , actual) => acumulador + actual / empleades.length
    return empleades.map(sueldo).reduce(promedio)
}

//que tome por parámetro un seniority, y devuelva el sueldo promedio de todes les empleades que tengan ese seniority
const sueldoPromedioPorSeniority = (empleades, seniority) => {
    const tipoSeniority = empleade => empleade.seniority === seniority
    const sueldo = empleade => empleade.sueldo
    const promedio = (acumulador, actual) => acumulador + actual / tipoSeniority.length
return empleades.filter(tipoSeniority).map(sueldo).reduce(promedio)
}

//que tome por parámetros area, puesto y seniority, y devuelva un array con les empleades que pertenezcan a dicha area, puesto y seniority
const buscarEmpleades = (empleades, area, puesto, seniority) => {
    const areaEmpleades = empleade => empleade.area === area
    const puestoEmpleades = empleade => empleade.puesto === puesto
    const seniorityEmpleades = empleade => empleade.seniority === seniority
    return empleades.filter(areaEmpleades).filter(puestoEmpleades).filter(seniorityEmpleades)
}

//que ponga en true la propiedad haceGuardia de todos los empleados
const errorEnProduccion = empleades => {
    const guardiaTrue = empleade => {
        empleade.haceGuardia = true;
        return empleade
    }
    return empleades.map(guardiaTrue)
}

//que tome como parámetro un objeto empleade. Si diche empleade no tiene un seniority "Senior", cambiar el valor de 
//su propiedad seniority con el siguiente que le corresponde en orden ("Trainee" -> "Junior" -> "Semisenior" -> "Senior"), y le incremente en 10000 el sueldo
const subirDeCategoria = empleades => { //"Trainee" -> "Junior" -> "Semisenior" -> "Senior"
    const seniorityEmpleades = empleade => empleade.seniority
    const sueldo = empleade => empleade.sueldo

    const categoria = empleade => {
        if(seniorityEmpleades === 'Trainee') {
            seniorityEmpleades = 'Junior';
            sueldo = sueldo + 10000;
            return empleade
        }
        if(seniorityEmpleades === 'Junior') {
            seniorityEmpleades = 'Semisenior';
            sueldo = sueldo + 10000;
            return empleade
        }
        if(seniorityEmpleades === 'Semisenior') {
            seniorityEmpleades = 'Senior';
            sueldo = sueldo + 10000;
            return empleade
        }
    }
    return empleades.map(categoria)
}

//que agregue a todos los objetos empleades la propiedad tecnologías,que es un array conteniendo los valores "GIT" y "Node.js"
const agregarTecnologias = empleades => {
    const agregar = empleade => {
        return ({ ...empleade, tecnologias: ['GIT', 'Node JS'] })
    }
    return empleades.map(agregar)
}

//que tome por parámetro un objeto empleade (elemento del array empleades) y un lenguaje y devuelva true si dicho empleade sabe dicho lenguaje
const empleadeSabeLenguaje = (empleade, lenguaje) => {
    return empleade.lenguajes.includes(lenguaje)
    }

//que tome por parámetro un lenguaje y devuelva todes les empleades que saben dicho lenguaje (usar la función anterior)
const empleadesQueSabenLenguaje = lenguaje => {
    const sabenLenguaje = empleade => empleadeSabeLenguaje(empleade, lenguaje);
    return empleades.filter(sabenLenguaje)
}

/* que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan todos esos 
lenguajes
 *///NO SALIO
const empleadesQueSabenLenguajes = lenguajes => {
const sabenLenguajes = empleade => empleade.lenguajes === lenguajes

    return empleades.every(sabenLenguajes)
}

//que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan al menos uno 
//de esos lenguajes

const empleadesQueSabenAlgunosLenguajes = lenguajes => {
    const sabenLenguaje = empleade => {
        return empleade.lenguajes.includes(lenguajes)
    }
    return empleades.filter(sabenLenguaje)
}


//empleadesConMejorSueldo, que devuelva un array con los 10 mejores empleades pagos (investigar metodo sort)

const empleadesConMejorSueldo = empleades => {
    const sueldoMenor = (a, b) => {
        return b.sueldo - a.sueldo
      }
      
     return [...empleades].sort(sueldoMenor)[9]
}

/* obtenerTitulosCompletos, que devuelva un array donde cada elemento es un string con la forma "nombre, puesto 
seniority, area", p.ej.: "Nadia Conrad, Senior Backend Developer, Desarrollo", habiendo un elemento por cada 
empleade (usar map) */

const obtenerTitulosCompletos = empleades => {
    const tituloCompleto = empleade => {
        return `${empleade.nombre}, ${empleade.puesto}, ${empleade.seniority}, ${empleade.area}`
        
    }
    return empleades.map(tituloCompleto)
}


/* 
obtenerInfoPersonal, que devuelva un array donde cada elemento es un objeto con las propiedades

    nombre
    pais
    edad habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto 
    original (usar map)
 */

const obtenerInfoPersonal = empleades => {
    const obtenerInfo = empleade => {
        const infoResumida = {}
        infoResumida.nombre = empleade.nombre
        infoResumida.pais = empleade.pais
        infoResumida.edad = empleade.edad
        
        return infoResumida
        }
    
        return empleades.map(obtenerInfo)
}


/* obtenerInfoPuestos, que devuelva un array donde cada elemento es un objeto con las propiedades

    nombre
    area
    puesto
    seniority habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la 
    propiedad del objeto original (usar map)

 */

const obtenerInfoPuestos = empleades => {
    const obtenerInfo = empleade => {
        const infoResumida = {}
        infoResumida.nombre = empleade.nombre
        infoResumida.area = empleade.area
        infoResumida.puesto = empleade.puesto
        infoResumida.seniority = empleade.seniority
        
        return infoResumida
        }
    
        return empleades.map(obtenerInfo)
}

/* 
obtenerInfoSeniority, que devuelva un array donde cada elemento es un objeto con las propiedades

    nombre
    seniority
    sueldo
    cantidadLenguajes habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original, eecepto cantidadLenguajes, que es un número indicando la cantidad de lenguajes que sabe (usar map)
 */

const obtenerInfoSeniority = empleades => {
    const obtenerInfo = empleade => {
        const infoResumida = {}
        infoResumida.nombre = empleade.nombre
        infoResumida.seniority = empleade.seniority
        infoResumida.sueldo = empleade.sueldo
        infoResumida.cantidadLenguajes = empleade.lenguajes.length
        
        return infoResumida
        }
    
        return empleades.map(obtenerInfo)
}

/* obtenerEstadisticasSeniority que devuelva un objeto donde cada propiedad es un seniority y el valor la cantidad 
de empleades con dicho seniority */

const obtenerEstadisticasSeniority = empleades => {
    const obtenerEstadisticas = (cuentaParcial, empleade) => {
        cuentaParcial[empleade.seniority] = cuentaParcial[empleade.seniority] + 1 || 1
        return cuentaParcial
    }
    return empleades.reduce(obtenerEstadisticas, {})
      
}


/* obtenerEstadisticasLenguajes que devuelva un objeto donde cada propiedad es un lenguaje y el valor la cantidad 
de empleades que saben dicho lenguaje*/

const obtenerEstadisticasLenguajes = empleades => {
const aLenguajes = empleade => empleade.lenguajes

const aArray = (arrayParcial, lenguajes) => [...arrayParcial, ...lenguajes]

const aLenguajesUnicos = (lenguajes, lenguaje) => 
  lenguajes.includes(lenguaje) ? lenguajes : [...lenguajes, lenguaje]

return empleades
  .map(aLenguajes)
  .reduce(aArray)
  .reduce(aLenguajesUnicos, [])
}
