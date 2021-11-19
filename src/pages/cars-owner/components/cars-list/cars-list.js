import React from 'react'

import {
    Spinner,
    NoData,
} from '../../../../components'

import { CarsListHeader } from './cars-list-header'
import { CarsListItem } from './cars-list-item'

import styles from './cars-list.module.css'

export const CarsList = (props) => {
    const { 
        cars,
        carsLoading
    } = props

    return (
        <div className={styles.container}>
            {
                carsLoading
                ? <Spinner style={{ height: 'calc(100vh - 100px)' }} />
                : cars.length
                ? (
                    <>
                        <CarsListHeader />
                        
                        {
                            cars.map((item, index) => (
                                <CarsListItem
                                    key={index}
                                    item={item}
                                    index={index}
                                />
                            ))
                        }
                    </>
                )
                : <NoData style={{ height: 'calc(100vh - 100px)' }} /> // empty data
            }
        </div>
    )
}