import { clearToken } from '../../redux/action'
import store from '../../redux/store'
// import { removeToken } from '../storage/Token'

export const host = 'http://blieka.herokuapp.com/api'

// export const api = (method, path, body = null, token = null, file = null) => {
//     const headers = file 
//     ? {
//         Authorization: `Bearer ${token}`,
//     } 
//     : {
//         Accept : 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//     }

//     const data = fetch(host + path, {
//         method: method,
//         headers: headers,
//         body: body,
//     })
//     .then((res) => res.json())
//     .then((resJson) => {
//         if (
//             resJson.status === 'Token is expired!' ||
//             resJson.status === 'Token is Invalid!'
//         ) {
//             removeToken().then(() => store.dispatch(clearToken()))
//         } else {
//             return resJson
//         }
//     })

//     return data
// }
export const api = (method, path, body = null, file = null) => {
    const { token } = store.getState()
    const headers = new Headers()
    // headers.append('Accept', 'application/json')
    // file ? null : headers.append('Content-Type', 'application/json')
    // token !== null ? headers.append('Authorization', 'Bearer' + token) : null
    headers.append("Accept", "application/json");
    !file && headers.append("Content-Type", "application/json");
    token !== null && headers.append("Authorization", "Bearer " + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9ibGlla2EuaGVyb2t1YXBwLmNvbVwvYXBpXC9sb2dpbiIsImlhdCI6MTYxNjk0NTkxMywiZXhwIjoxNjE2OTQ5NTEzLCJuYmYiOjE2MTY5NDU5MTMsImp0aSI6IllxNnFoMHBtcGtIazNlOXoiLCJzdWIiOjM0LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.jmTwe2nWwWFSLGemD9z-m4XtZkn7er-s7wkoqRGgLKk');

    const data = fetch(host + path, {
        method: method,
        headers: headers,
        body: method === 'GET' ? null : file ? body : JSON.stringify(body),
    })
    .then((response) => response.json())
    .then((resJson) => {
        console.log('ini resjson',resJson)
        if (resJson.message) {
            if (resJson.message.split(' ')[0] === 'Token') {
                store.dispatch(clearToken())
            }
        }
        return resJson
    })
    .catch((e) => {
        console.log(e)
        // Alert('Error',e)
    })

    return data

}