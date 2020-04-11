// Hacer ejercicios de artistas acá
/* que tome por parámetro un array de artistas y devuelva un array con les artistas que sean solistas */

const artistasSolistas = artistas => {
    const solistas = artista => artista.solista === true
    return artistas.filter(solistas)
}

/* que tome un parámetro "edad" y un array de artistas y devuelva un array con les artistas que tengan dicha edad */
const artistasPorEdad = (artistas, x) => {
    const porEdad = artista => artista.edad === x
    return artistas.filter(porEdad)
}

/*que tome por parámetro un array de artistas y devuelva un objeto donde cada "instrumento" es una propiedad 
//y su valor la cantidad de artistas que tocan dicho instrumento */

const cantidadDeArtistasPorInstrumento = artistas => {
    const cantidadPorInstrumento = (cuentaParcial, artista) => {
        cuentaParcial[artista.instrumento] = cuentaParcial[artista.instrumento] + 1 || 1
        return cuentaParcial
    }
    return artistas.reduce(cantidadPorInstrumento, {})
}

//cantidadDeArtistasPorGenero, que tome por parámetro un array de artistas y devuelva un objeto donde cada "género" 
//es una propiedad y su valor la cantidad de artistas de dicho género

const cantidadDeArtistasPorGenero = artistas => {
    const cantidadPorGenero = (cuentaParcial, artista) => {
        cuentaParcial[artista.genero] = cuentaParcial[artista.genero] + 1 || 1
        return cuentaParcial
    }
    return artistas.reduce(cantidadPorGenero, {})
}

/* artistasConMasDiscosQue, que tome por parámetro "cantidadDeDiscos" y un array de artistas y devuelva un array 
con les artistas que tiene más de esa cantidad de discos, ordenados de mayor a menor según cantidad de discos */

const artistasConMasDiscosQue = (cantidadDeDiscos, artistas) => {
    const cantidadDiscos = artista => artista.discos.length > cantidadDeDiscos
    const mayorAMenor = (a, b) => b.discos.length - a.discos.length

    return artistas.filter(cantidadDiscos).sort(mayorAMenor)
}

/* artistaConMasEntradasVendidas, que tome por parámetro un array de artistas y devuelva el objeto artista que 
vendió más entradas en su último recital */

const artistaConMasEntradasVendidas = artistas => {
    const masVendidas = (a, b) => b.ultimoRecital.entradasVendidas - a.ultimoRecital.entradasVendidas
    return artistas.sort(masVendidas)[0]
}

/* artistaConMayorRecaudacion, que tome por parámetro un array de artistas y devuelva el objeto artista que más 
recaudó en su último recital (entradasVendidas * costoEntradas) */

const artistaConMayorRecaudacion = artistas => {
    const MayorRecaudacion = (a, b) => b.ultimoRecital.entradasVendidas * b.ultimoRecital.costoEntradas - a.ultimoRecital.entradasVendidas * a.ultimoRecital.costoEntradas
    
    return artistas.sort(MayorRecaudacion)[0] 
}


/* artistasConDiscoEnAnio, que tome por parámetro un parámetro "anio", y devuelva true un array con los artistas 
que tengan publicado al menos un disco en dicho año */
//NO SALIO
const artistasConDiscoEnAnio = (anio, artistas) => {
    const artistasAnio = artista => artista.discos.anioLanzamiento === anio

    return artistas.filter(artistasAnio)
}