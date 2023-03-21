import { getHeroeById } from "./bases/08-exportacion-importaciones";


// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {

//     const heroe = getHeroeById(2)
   
//     resolve(heroe)

//     }, 2000);
// })

// promesa.then((heroe) => {
//     console.log(heroe);
// })
// .catch(err => console.warn(err))

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
    
        const heroe = getHeroeById(id)

        if(heroe){
            resolve(heroe)
        }else{
            reject(`No se encontro el heroe con Id ${id}`)
        }
       
    
        }, 2000);
    })
}

getHeroeByIdAsync(10)
    .then(heroe => console.log('Heroe',heroe))
    .catch(err => console.warn(err))