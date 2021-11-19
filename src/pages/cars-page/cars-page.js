import React, { useEffect } from 'react'

import { 
    useSelector,
    useDispatch,
} from 'react-redux'

import queryString from 'query-string'

import { getCarsAction } from '../../store/actions/cars'

import { CarsList } from './components'

import styles from './cars-page.module.css'

export const CarsPage = (props) => {
    const { location } = props

    const cars = useSelector((state) => state.cars.cars)
    const carsLoading = useSelector((state) => state.cars.carsLoading)
    const carsPage = useSelector((state) => state.cars.carsPage)
    const carsLastPage = useSelector((state) => state.cars.carsLastPage)
    
    const dispatch = useDispatch()

    useEffect(() => {
        const searchParams = queryString.parse(location.search)
        
        if (searchParams.sort) {
            dispatch(getCarsAction(searchParams))
        } else {
            dispatch(getCarsAction())
        }
    }, [])

    return (
        <div className={styles.container}>
           <CarsList 
                cars={cars}
                carsLoading={carsLoading}
                carsPage={carsPage}
                carsLastPage={carsLastPage}
                location={location}
            />   
        </div>   
    )
}