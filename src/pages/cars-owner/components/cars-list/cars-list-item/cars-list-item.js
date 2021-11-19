import React from 'react'

import styles from './cars-list-item.module.css'

export const CarsListItem = (props) => {
    const { 
        item,
        index, 
    } = props
    console.log(item)
    return (
        <div className={styles.container}>
            <p className={styles.index}>{index + 1}.</p>
            <p className={styles.title}>{item.producer} {item.model}</p>
            <p className={styles.title}>{item.numberPlate}</p>
        </div>
    )
}