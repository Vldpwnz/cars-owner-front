import React from 'react'

import styles from './user-cars-list-header.module.css'

export const UserCarsListHeader = (props) => {
    const { user } = props
    
    return (
        <div className={styles.container}>
            <p className={styles.title}>{user.name}</p>
        </div>
    )
}