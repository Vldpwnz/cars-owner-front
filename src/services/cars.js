import { axiosInstance } from './instance'

export const getCars = (params) => {
    return axiosInstance.get('cars', { params: { ...params } })
}

export const getCar = (carId) => {
    return axiosInstance.get(`cars/${carId}`)
}