import React from 'react'

import styles from './users-list-header.module.css'

export const UsersListHeader = (props) => {
    const { onSort } = props

    return (
        <div className={styles.container}>
            <p className={styles.plug} />

            <p 
                className={styles.title}
                onClick={() => onSort()}
            >
                Name
            </p>
        </div>
    )
}