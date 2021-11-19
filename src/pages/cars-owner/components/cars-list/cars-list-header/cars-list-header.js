import React from 'react'

import styles from './cars-list-header.module.css'

export const CarsListHeader = () => {
    return (
        <div className={styles.container}>
            <p className={styles.plug} />
            <p className={styles.title}>Model</p>
            <p className={styles.title}>Number plate</p>
        </div>
    )
}