import axios from 'axios'

const axiosInstance = axios.create({ baseURL: 'http://localhost:8080/' })

axiosInstance.interceptors.request.use(handleSuccess, null)
axiosInstance.interceptors.response.use(null, handleError)

function handleSuccess(res) {
    return res
}

function handleError(error) {
    console.log(error)

    return Promise.reject(error)
}

export { axiosInstance }