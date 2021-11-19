const initialState = {
    users: [],
    usersLoading: false,
    usersPage: 0,
    usersLastPage: false,
    usersPerPage: 5,

    user: null,
    userLoading: false,

    userCars: [],
    userCarsLoading: false,
}

export const users = (state = initialState, action) => {
    switch(action.type) {
        // GET_USERS_START
        case 'GET_USERS_REQUEST':
            return {
                ...state,
                usersLoading: true,
            }
        case 'GET_USERS_SUCCESS':
            return {
                ...state,
                users: action.payload.users,
                usersLoading: false,
                usersPage: action.payload.usersPage,
                usersLastPage: action.payload.usersLastPage,
            }
        case 'GET_USERS_FAILURE':
            return {
                ...state,
                usersLoading: false,
            }
        // GET_USERS_END

        // GET_USER_START
         case 'GET_USER_REQUEST':
            return {
                ...state,
                userLoading: true,
            }
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                user: action.payload,
                userLoading: false,
            }
        case 'GET_USER_FAILURE':
            return {
                ...state,
                userLoading: false,
            }
        // GET_USER_END 

        // GET_USER_CARS_START
         case 'GET_USER_CARS_REQUEST':
            return {
                ...state,
                userCarsLoading: true,
            }
        case 'GET_USER_CARS_SUCCESS':
            return {
                ...state,
                userCars: action.payload,
                userCarsLoading: false,
            }
        case 'GET_USER_CARS_FAILURE':
            return {
                ...state,
                userCarsLoading: false,
            }
        // GET_USER_CARS_END

        default:
            return state
    }
}