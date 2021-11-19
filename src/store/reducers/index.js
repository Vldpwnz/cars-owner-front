import { combineReducers } from 'redux'

import { users } from './users'
import { cars } from './cars'

export const reducers = combineReducers({
    users,
    cars,
})