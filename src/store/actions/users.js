import {
    getUsers,
    getUser,
    getUserCars,
} from '../../services/users'

import { store } from '../index'

export const getUsersAction = (params = {}, callback) => {
    return async (dispatch) => {
        dispatch({ type: 'GET_USERS_REQUEST' })
        
        try {
            let page = store.getState().users.usersPage
            let usersPerPage = store.getState().users.usersPerPage
            let usersLastPage = store.getState().users.usersLastPage
            let usersOrder = store.getState().users.usersOrder
            
            const getUsersParams = { page: page }

            if (params.pagination) {
                if (params.pagination === 'prev') {
                    page--

                    getUsersParams.page = page
                } else if (params.pagination === 'next' && !usersLastPage) {
                    page++

                    getUsersParams.page = page
                }
            }

            if (params.find) {
                getUsersParams.find = params.find
            }

            if (params.sort) {
                getUsersParams.sort = params.sort

                if (params.order) {
                    getUsersParams.order = params.order
                } else {
                    if (usersOrder === 'desc') {
                        getUsersParams.order = 'asc'
                    } else if (usersOrder === 'asc') {
                        getUsersParams.order = 'desc'
                    }
                }
            }

            const { data } = await getUsers(getUsersParams)

            dispatch({
                type: 'GET_USERS_SUCCESS',
                payload: {
                    users: [...data],
                    usersPage: page,
                    usersLastPage: data.length < usersPerPage,
                    usersOrder: getUsersParams.order || usersOrder,
                },
            })

            if (callback) callback()
        } catch (error) {
            dispatch({ type: 'GET_USERS_FAILURE' })
        }
    }
}

export const getUserAction = (params = {}, callback) => {
    return async (dispatch) => {
        dispatch({ type: 'GET_USER_REQUEST' })

        try {
            const userData = await getUser(params.userId)
            const userCarsData = await getUserCars(params.userId)

            const user = {
                ...userData.data,
                cars: [...userCarsData.data],
            }

            dispatch({
                type: 'GET_USER_SUCCESS',
                payload: user,
            })

            if (callback) callback()
        } catch (error) {
            dispatch({ type: 'GET_USER_FAILURE' })
        }
    }
}