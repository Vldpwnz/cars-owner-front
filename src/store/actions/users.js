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
            
            if (params.pagination) {
                if (params.pagination === 'prev') {
                    page--
                } else if (params.pagination === 'next' && !usersLastPage) {
                    page++
                }
            }

            const { data } = await getUsers({ page: page })

            dispatch({
                type: 'GET_USERS_SUCCESS',
                payload: {
                    users: [...data],
                    usersPage: page,
                    usersLastPage: data.length <= usersPerPage,
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
            const data = await getUser(params.userId)
            console.log(data)
            dispatch({
                type: 'GET_USER_SUCCESS',
                //payload: languages,
            })

            if (callback) callback()
        } catch (error) {
            dispatch({ type: 'GET_USER_FAILURE' })
        }
    }
}

export const getUserCarsAction = (params = {}, callback) => {
    return async (dispatch) => {
        dispatch({ type: 'GET_USER_CARS_REQUEST' })

        try {
            const data = await getUserCars(params.userId)
            console.log(data)
            dispatch({
                type: 'GET_USER_CARS_SUCCESS',
                //payload: languages,
            })

            if (callback) callback()
        } catch (error) {
            dispatch({ type: 'GET_USER_CARS_FAILURE' })
        }
    }
}