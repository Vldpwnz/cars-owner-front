import {
    getCars,
    getCar,
} from '../../services/cars'

export const getCarsAction = (params = {}, callback) => {
    return async (dispatch) => {
        dispatch({ type: 'GET_CARS_REQUEST' })

        try {
            const { data } = await getCars()
        
            dispatch({
                type: 'GET_CARS_SUCCESS',
                payload: [...data],
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
            const data = await getCar(params.carId)
            console.log(data)
            dispatch({
                type: 'GET_CAR_SUCCESS',
                //payload: languages,
            })

            if (callback) callback()
        } catch (error) {
            dispatch({ type: 'GET_CAR_FAILURE' })
        }
    }
}
