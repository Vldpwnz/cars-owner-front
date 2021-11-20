import React from 'react'

import { 
    useDispatch, 
    useSelector, 
} from 'react-redux'

import { useHistory } from 'react-router-dom'

import queryString from 'query-string'

import { getUsersAction } from '../../../../store/actions/users'

import {
    Spinner,
    NoData,
    Pagination
} from '../../../../components'

import { UsersListHeader } from './users-list-header'
import { UsersListItem } from './users-list-item'

import styles from './users-list.module.css'

export const UsersList = (props) => {
    const { 
        users,
        usersLoading,
        usersPage,
        usersLastPage,
        location,
    } = props

    const usersOrder = useSelector((state) => state.users.usersOrder)

    const dispatch = useDispatch()
    const history = useHistory()

    const onClickPrev = () => {
        const searchParams = queryString.parse(location.search)

        dispatch(getUsersAction({ ...searchParams, pagination: 'prev' }))
    }

    const onClickNext = () => {
        const searchParams = queryString.parse(location.search)

        dispatch(getUsersAction({ ...searchParams, pagination: 'prev' }))
    }

    const onSort = () => {
        const searchParams = queryString.parse(location.search)

        if (searchParams.find) {
            history.push(`?sort=name&order=${usersOrder === 'asc' ? 'desc' : 'asc'}&find=${searchParams.find}`)

            dispatch(getUsersAction({ sort: 'name', find: searchParams.find }))
        } else {
            history.push(`?sort=name&order=${usersOrder === 'asc' ? 'desc' : 'asc'}`)

            dispatch(getUsersAction({ sort: 'name' }))
        }
    }

    return (
        <div className={styles.container}>
            {
                usersLoading
                ? <Spinner style={{ height: 'calc(100vh - 100px)' }} />
                : users.length
                ? (
                    <>
                        <UsersListHeader 
                            usersOrder={usersOrder}
                            onSort={onSort} 
                        />

                        {
                            users.map((item) => (
                                <UsersListItem
                                    key={item.id}
                                    item={item}
                                />
                            )) 
                        }

                        <Pagination
                            disabledPrev={!usersPage}
                            disabledNext={usersLastPage}
                            onClickPrev={onClickPrev}
                            onClickNext={onClickNext}
                        />
                    </>
                )
                : <NoData style={{ height: 'calc(100vh - 100px)' }} /> // empty data
            }
        </div>
    )
}