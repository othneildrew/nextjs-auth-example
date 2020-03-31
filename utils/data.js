
const baseUrl = process.env.APP_API_URL || 'localhost'

export function getData(endpoint) {
    let url = `${baseUrl}/${endpoint}`

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'GET',
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((responseJson) => resolve(responseJson))
            .catch((error) => reject(error))
    })
}

export function postData(path, data) {
    let url = `${baseUrl}/api/${path}`

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((responseJson) => resolve(responseJson))
            .catch((error) => reject(error))
    })
}