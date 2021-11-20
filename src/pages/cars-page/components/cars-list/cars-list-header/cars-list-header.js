import React from 'react'

import styles from './cars-list-header.module.css'

import arrowUp from '../../../../../assets/icons/arrow-up.png'
import arrowDown from '../../../../../assets/icons/arrow-down.png'

export const CarsListHeader = (props) => {
    const { 
        carsOrder,
        onSort, 
    } = props

    return (
        <div className={styles.container}>
            <p className={styles.plug} />
            
            <div className={styles.title_sort_container}>
                <p 
                    className={styles.title_sort}
                    style={{ backgroundImage: carsOrder === 'desc' ? `url(${arrowUp})` : `url(${arrowDown})` }}
                    onClick={() => onSort()}
                >
                    Model
                </p>
            </div>

            <p className={styles.title}>Number plate</p>
        </div>
    )
}