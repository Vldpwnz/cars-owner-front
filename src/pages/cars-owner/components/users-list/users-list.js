import React from 'react'

import { useDispatch } from 'react-redux'

import { getUsersAction } from '../../../../store/actions/users'

import {
    Spinner,
    NoData,
    Pagination
} from '../../../../components'

import { UsersListItem } from './users-list-item'

import styles from './users-list.module.css'

export const UsersList = (props) => {
    const { 
        users,
        usersLoading,
        usersPage,
        usersLastPage,
    } = props

    const dispatch = useDispatch()

    const onClickPrev = () => {
        dispatch(getUsersAction({ pagination: 'prev' }))
    }

    const onClickNext = () => {
        dispatch(getUsersAction({ pagination: 'next' }))
    }

    return (
        <div className={styles.container}>
            {
                usersLoading
                ? <Spinner style={{ height: 'calc(100vh - 100px)' }} />
                : users.length
                ? (
                    <>
                        {
                            users.map((item, index) => (
                                <UsersListItem
                                    key={index}
                                    item={item}
                                    index={index}
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