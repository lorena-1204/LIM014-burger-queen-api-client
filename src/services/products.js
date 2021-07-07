export const getProducts = async (url) => {

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    } ) 
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
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })
    const responseJSON = await response.json()
    return responseJSON
}
