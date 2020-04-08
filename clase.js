const personas = [
    {
        nombre: 'Sol'
    },
    {
        nombre: 'Lu',
    },
    {
        nombre: 'Jose'
    },
    {
        nombre: 'Flor'
    }
]

personas[2].nombre // Jose

////* MAP *///// Lo usamos cuando queremos hacer una operación EN CADA ITEM DEL ARRAY, y nos devuelve CADA ITEM MODIFICADO

const numeros = [2, 4, 6, 8, 12]

const duplicar = x => x * 2;

const duplicados = numeros.map(duplicar) // requiere una función como callback
// lo que hace este método es recorrer CADA elemento del array y le va a aplicar la función, y lo pushea a un **nuevo array**... por eso hay que guardarlo en una nueva variable (que será el array devuelto) 

const duplicados = numeros.map(duplicar).map(duplicar) // encadeno métodos y CUADRUPLICO

const frutas = ["uva", "pera", "banana", "manzana"]

const aMayuscula = string => string.toUpperCase();


const FRUTAS = frutas.map(aMayuscula);

// otra opción //
frutas.map(s => s.toUpperCase());

// es mejor hacer función aparte para que sea más clara la lectura del código. ES UNA BUENA PRÁCTICA HACER FUNCIÓN APARTE

/// práctica

const productos = [
    {
        name: "Coca cola",
        price: 12,
        shop: "Dia",
    },
    {
        name: "Sprite",
        price: 7,
        shop: "Disco",
    },
    {
        name: "Manaos",
        price: 20,
        shop: "Malambo",
    },
    {
        name: "Fanta",
        price: 20,
        shop: "Dia",
    },

]

// quiero que el resultado sea un array de prodyctos, donde cada item sea un objeto.

// const productosMapeados = [
// {
//     name: "Coca cola",
//     price: 12, // en pesos argentinos
// }
//]

const aPesos = producto => ({ // pongo paréntesis porque las llaves que delimitan mi objeto, pueden confundirse con la sintaxis de función ({})... entonces para decirle a javascript que esto que devuelve, es un objeto, pongo el objeto entre paréntesis...
    nombre: producto.name,
    precio: producto.price * 60
})

const productosMapeados = productos.map(aPesos) // defino qué elementos del objeto quiero que aparezca, en la función que definí



////* FILTER *//// también toma un callback como parámetros
const otrosNumeros = [5, 6, 8, 34, 12, 76, 18, 22];

const mayorA20 = x => x > 20

const numerosMayoresA20 = otrosNumeros.filter(mayorA20) /// si la función que pasamos devuelve TRUE, se pushea el elemento al nuevo array, si da FALSE, no se pushea

const esDeDia = producto => producto.shop === "Dia"

const productosDia = productos.filter(esDeDia)


////** REDUCE **/// también toma un callback como parámetro, pero tiene una particularidad: tiene un acumulador, va manteniendo un valor entre cada iteración... una vez que termina de iterar, devuelve el acumulador en resultado final.

const numerosASumar = [2, 4, 6, 10];

const sumaDeNumeros = (sumaParcial, item) => {
    return sumaParcial + item
} // en suma parcial va "concatenando" o "sumando" el item de ese moment.. cuando termina de reccorrer TODO, devuelve el resultado final...

const sumaTotal = numerosASumar.reduce(sumaDeNumeros) // 22

//===================================================

const cantidadPorSupermercado = (datosParciales, producto) => {
    const supermercado = producto.shop // le agrego una propiedad al objeto final, para tener el nombre de la tienda
    datosParciales[supermercado] = datosParciales[supermercado] + 1 || 1 // en caso de no existir la variable aún, no le puedo sumar 1, proque no existe... entonces tiene que tener el valor inicial 1... pero si ya existe, entonces se le suma 1 a eso que ya existe
    return datosParciales // devuelve el resultado Parcial hasta que termine todas las iteraciones, y ahí devuelve el resultado final, que sería el dato parcial de esa última iteración
}

const productosPorSupermercado = productos.reduce(cantidadPorSupermercado, {}) // le tengo que poner el valor inicial "{}" para que devuelva un objeto


// ==============================================

const palabras = ["gato", "perro", "casa", "bicicleta"]
const palabrasConcatenadas = (stringParcial, item) => {
    return stringParcial + item + " - "
}

const stringFinal = palabras.reduce(palabrasConcatenadas, "") // le indico que el primer stringParcial es un string vacío al que le iré concatenando los items....

