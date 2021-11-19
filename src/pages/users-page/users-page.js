import React, { useEffect } from 'react'

import { 
    useSelector,
    useDispatch,
} from 'react-redux'

import queryString from 'query-string'

import { getUsersAction } from '../../store/actions/users'

import { UsersList } from './components'

import styles from './users-page.module.css'

export const UsersPage = (props) => {
    const { location } = props

    const users = useSelector((state) => state.users.users)
    const usersLoading = useSelector((state) => state.users.usersLoading)
    const usersPage = useSelector((state) => state.users.usersPage)
    const usersLastPage = useSelector((state) => state.users.usersLastPage)

    const dispatch = useDispatch()

    useEffect(() => {
        const searchParams = queryString.parse(location.search)
        
        if (searchParams.sort) {
            dispatch(getUsersAction(searchParams))
        } else {
            dispatch(getUsersAction())
        }
    }, [])

    return (
        <div className={styles.container}>
            <UsersList 
                users={users}
                usersLoading={usersLoading}
                usersPage={usersPage}
                usersLastPage={usersLastPage}
                location={location}
            />   
        </div>   
    )
}