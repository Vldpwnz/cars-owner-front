import React from 'react'

import styles from './users-list-item.module.css'

export const UsersListItem = (props) => {
    const { 
        item,
        index, 
    } = props

    return (
        <div className={styles.container}>
            <p className={styles.index}>{index + 1}.</p>
            <p className={styles.user}>{item.name}</p>
        </div>
    )
}