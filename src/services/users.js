import { axiosInstance } from './instance'

export const getUsers = (params) => {
    return axiosInstance.get('users', { params: { ...params } })
}

export const getUser = (userId) => {
    return axiosInstance.get(`users/${userId}`)
}

export const getUserCars = (userId) => {
    return axiosInstance.get(`users/${userId}/cars`)
}
