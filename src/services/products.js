const headersHttp = {
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGMzNGEzMWI2NjZlZTE3OThkMzFlOGQiLCJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdCIsInJvbGVzIjp7ImFkbWluIjp0cnVlfSwiaWF0IjoxNjIzNTU0NzU4LCJleHAiOjk5OTk5OTk5OTk5fQ.zGMhPbJxmlZUvznOr76NqBnI2DKx0l4612qdET0-66w'
    },
}

export const getProducts = async (url) => {
    // definir funcion se usa Async porque incluye cosas asincronas
    //Respuesta de la funcion fetch a la url(dataProducts) y es un await  porque se debe esperar y retorna una promesa
    const response = await fetch(url, headersHttp) /*Se alamacena la respuesta de la url */
    // console.log(response.status)

    //se procesa la respuesta(parsea), interpretandola como json
    const responseJSON = await response.json()
    return responseJSON
    // console.log(responseJSON.products)
}

export const postProducts = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        ...headersHttp
    })
    const responseJSON = await response.json()
    return responseJSON
}


