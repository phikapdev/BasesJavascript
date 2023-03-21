
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.clave)

const {nombre, edad, clave} = persona

console.log(nombre)
console.log(edad)
console.log(clave)

const getUsuario = ({clave, nombre, edad, rango = 'Capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1234,
            lng: -12.3232
        }
    }
}

const {nombreClave, anios, latlng: {lat, lng} } = getUsuario(persona)

console.log(nombreClave, anios)
console.log(lat, lng)