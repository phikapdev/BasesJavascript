
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5533231,
        lat: 14.323211,
        lng: 34.923321
    }
}


const persona2 = {... persona}  //Clon del objeto
persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);