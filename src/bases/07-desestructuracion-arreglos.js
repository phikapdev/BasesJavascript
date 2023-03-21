
const personajes = ['Goku', 'Vegeta', 'Trunks']

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [,, p3 ] = personajes

// console.log(p1);
// console.log(p2);
console.log(p3);

const retornarArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornarArreglo()

console.log(letras, numeros);

const asignarNombre = (valor) => {
    return [valor, ()=>{ console.log('Hola Mundo') }]
}

const [nombre, setNombre] = asignarNombre('Goku')

console.log(nombre);
setNombre();