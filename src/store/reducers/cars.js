const initialState = {
    cars: [],
    carsLoading: false,
    carsPage: 0,
    carsLastPage: false,
    carsPerPage: 5,
    carsOrder: 'desc',

    car: null,
    carLoading: false,
}

export const cars = (state = initialState, action) => {
    switch(action.type) {
        // GET_CARS_START
        case 'GET_CARS_REQUEST':
            return {
                ...state,
                carsLoading: true,
            }
        case 'GET_CARS_SUCCESS': {
            const updatedCars = [...action.payload.cars]

            if (updatedCars.length) {
                updatedCars.map((car, index) => {
                    car.number = index + 1 + (action.payload.carsPage * state.carsPerPage) 

                    return car
                })
            }

            return {
                ...state,
                cars: updatedCars,
                carsLoading: false,
                carsPage: action.payload.carsPage,
                carsLastPage: action.payload.carsLastPage,
                carsOrder: action.payload.carsOrder,
            }
        }
        case 'GET_CARS_FAILURE':
            return {
                ...state,
                carsLoading: false,
            }
        // GET_CARS_END

        // GET_CAR_START
         case 'GET_CAR_REQUEST':
            return {
                ...state,
                carLoading: true,
            }
        case 'GET_CAR_SUCCESS':
            return {
                ...state,
                car: action.payload,
                carLoading: false,
            }
        case 'GET_CAR_FAILURE':
            return {
                ...state,
                carLoading: false,
            }
        // GET_CAR_END 

        default:
            return state
    }
}