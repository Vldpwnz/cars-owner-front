import React, { useEffect } from 'react'

import { 
    useSelector,
    useDispatch,
} from 'react-redux'

import { getUserAction } from '../../store/actions/users'

import { UserCarsList } from './components'

import styles from './user-page.module.css'

export const UserPage = (props) => {
    const { match: { params} } = props

    const user = useSelector((state) => state.users.user)
    const userLoading = useSelector((state) => state.users.userLoading)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserAction({ userId: params.id }))
    }, [])

    return (
        <div className={styles.container}>
            <UserCarsList 
                user={user}
                userLoading={userLoading}
            />
        </div>   
    )
}