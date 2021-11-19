const initialState = {
    users: [],
    usersLoading: false,
    usersPage: 0,
    usersLastPage: false,
    usersPerPage: 10,
    usersOrder: 'desc',

    user: null,
    userLoading: false,
}

export const users = (state = initialState, action) => {
    switch(action.type) {
        // GET_USERS_START
        case 'GET_USERS_REQUEST':
            return {
                ...state,
                usersLoading: true,
            }
        case 'GET_USERS_SUCCESS': {
            const updatedUsers = [...action.payload.users]

            if (updatedUsers.length) {
                updatedUsers.map((user, index) => {
                    user.number = index + 1 + (action.payload.usersPage * state.usersPerPage) 

                    return user
                })
            }

            return {
                ...state,
                users: updatedUsers,
                usersLoading: false,
                usersPage: action.payload.usersPage,
                usersLastPage: action.payload.usersLastPage,
                usersOrder: action.payload.usersOrder,
            }
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

        default:
            return state
    }
}