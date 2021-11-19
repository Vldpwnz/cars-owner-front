import React from 'react'

import { NavLink } from 'react-router-dom'

import styles from './cars-list-item.module.css'

export const CarsListItem = (props) => {
    const { item } = props

    return (
        <NavLink to={`/cars/${item.id}`}>
            <div className={styles.container}>
                <p className={styles.index}>{item.number}.</p>
                <p className={styles.title}>{item.producer} {item.model}</p>
                <p className={styles.title}>{item.numberPlate}</p>
            </div>
        </NavLink>
    )
}