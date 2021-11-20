import React from 'react'

import styles from './users-list-header.module.css'

import arrowUp from '../../../../../assets/icons/arrow-up.png'
import arrowDown from '../../../../../assets/icons/arrow-down.png'

export const UsersListHeader = (props) => {
    const { 
        usersOrder,
        onSort, 
    } = props
    
    return (
        <div className={styles.container}>
            <p className={styles.plug} />

            <p 
                className={styles.title}
                style={{ backgroundImage: usersOrder === 'desc' ? `url(${arrowUp})` : `url(${arrowDown})` }}
                onClick={() => onSort()}
            >
                Name
            </p>
        </div>
    )
}