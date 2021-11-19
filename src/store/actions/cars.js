import {
    getCars,
    getCar,
} from '../../services/cars'

import { store } from '../index'

export const getCarsAction = (params = {}, callback) => {
    return async (dispatch) => {
        dispatch({ type: 'GET_CARS_REQUEST' })

        try {
            let page = store.getState().cars.carsPage
            let carsPerPage = store.getState().cars.carsPerPage
            let carsLastPage = store.getState().cars.carsLastPage
            let carsOrder = store.getState().cars.carsOrder
            
            const getCarsParams = { page: page }

            if (params.pagination) {
                if (params.pagination === 'prev') {
                    page--

                    getCarsParams.page = page
                } else if (params.pagination === 'next' && !carsLastPage) {
                    page++

                    getCarsParams.page = page
                }
            }

            if (params.find) {
                getCarsParams.find = params.find
            }

            if (params.sort) {
                getCarsParams.sort = params.sort

                if (params.order) {
                    getCarsParams.order = params.order
                } else {
                    if (carsOrder === 'desc') {
                        getCarsParams.order = 'asc'
                    } else if (carsOrder === 'asc') {
                        getCarsParams.order = 'desc'
                    }
                }
            }

            const { data } = await getCars(getCarsParams)
        
            dispatch({
                type: 'GET_CARS_SUCCESS',
                payload: {
                    cars: [...data],
                    carsPage: page,
                    carsLastPage: data.length < carsPerPage,
                    carsOrder: getCarsParams.order || carsOrder,
                },
            })

            if (callback) callback()
        } catch (error) {
            dispatch({ type: 'GET_CARS_FAILURE' })
        }
    }
}

export const getCarAction = (params = {}, callback) => {
    return async (dispatch) => {
        dispatch({ type: 'GET_CAR_REQUEST' })

        try {
            const { data } = await getCar(params.carId)
            
            const car = {
                ...data.car,
                user: data.user,
            }

            dispatch({
                type: 'GET_CAR_SUCCESS',
                payload: car,
            })

            if (callback) callback()
        } catch (error) {
            dispatch({ type: 'GET_CAR_FAILURE' })
        }
    }
}
