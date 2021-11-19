import React from 'react'

import styles from './cars-list-header.module.css'

export const CarsListHeader = (props) => {
    const { onSort } = props

    return (
        <div className={styles.container}>
            <p className={styles.plug} />

            <p 
                className={styles.title}
                onClick={() => onSort()}
            >
                Model
            </p>

            <p className={styles.title}>Number plate</p>
        </div>
    )
}