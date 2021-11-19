import React from 'react'

import {
    Spinner,
    NoData,
} from '../../../../components'

import { UserCarsListHeader } from './user-cars-list-header'
import { UserCarsListItem } from './user-cars-list-item'

import styles from './user-cars-list.module.css'

export const UserCarsList = (props) => {
    const { 
        user,
        userLoading,
    } = props

    return (
        <div className={styles.container}>
            {
                userLoading
                ? <Spinner style={{ height: 'calc(100vh - 100px)' }} />
                : user
                ? (
                    <>
                        <UserCarsListHeader user={user} />
                        
                        {
                            user.cars && user.cars.length && user.cars.map((item, index) => (
                                <UserCarsListItem
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