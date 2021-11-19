import React, { 
    useState,
    useEffect,
 } from 'react'

import { 
    useSelector,
    useDispatch,
} from 'react-redux'

import { 
    getUsersAction,
    getUserAction,
    getUserCarsAction,
} from '../../store/actions/users'

import { 
    getCarsAction,
    getCarAction,
} from '../../store/actions/cars'

import {
    Header,
} from '../../components'

import {
    UsersList,
    CarsList,
} from './components'

import styles from './cars-owner-page.module.css'

export const CarsOwnerPage = () => {
    const users = useSelector((state) => state.users.users)
    const usersLoading = useSelector((state) => state.users.usersLoading)
    const usersPage = useSelector((state) => state.users.usersPage)
    const usersLastPage = useSelector((state) => state.users.usersLastPage)

    const cars = useSelector((state) => state.cars.cars)
    const carsLoading = useSelector((state) => state.cars.carsLoading)
    
    const dispatch = useDispatch()

    const [selectedTable, setSelectedTable] = useState('users') 

    useEffect(() => {
        dispatch(getUsersAction())
    }, [])

    const onClickHederButton = (buttonType) => {
        if (buttonType === 'users') {
            setSelectedTable('users')

            dispatch(getUsersAction())
        } else if (buttonType === 'cars') {
            setSelectedTable('cars')

            dispatch(getCarsAction())
        }
    }

    const renderTable = () => {
        if (selectedTable === 'users') {
            return (
                <UsersList 
                    users={users}
                    usersLoading={usersLoading}
                    usersPage={usersPage}
                    usersLastPage={usersLastPage}
                />   
            )
        } else if (selectedTable === 'cars') {
            return (
                <CarsList 
                    cars={cars}
                    carsLoading={carsLoading}
                />   
            )
        }
    }
    
    return (
        <div className={styles.container}>
            <Header 
                selectedTable={selectedTable}
                onClickHederButton={onClickHederButton} 
            />

            {renderTable()}
        </div>   
    )
}