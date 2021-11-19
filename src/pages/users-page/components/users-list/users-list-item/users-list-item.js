import React from 'react'

import { NavLink } from 'react-router-dom'

import styles from './users-list-item.module.css'

export const UsersListItem = (props) => {
    const { item } = props

    return (
        <NavLink to={`/users/${item.id}/cars`}>
            <div className={styles.container}>
                <p className={styles.index}>{item.number}.</p>
                <p className={styles.user}>{item.name}</p>
            </div>
        </NavLink>
    )
}