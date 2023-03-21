
const apiKey = 'J4mDD8lY3WxvKURbqXyEIfSMByaaIU7S'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
    .then( resp => resp.json())
    .then( ({data}) => {
        
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })
    .catch(err => console.warn(err))

