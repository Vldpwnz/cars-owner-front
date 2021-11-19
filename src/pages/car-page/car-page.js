import React, { useEffect } from 'react'

import { 
    useSelector,
    useDispatch,
} from 'react-redux'

import { 
    Spinner,
    NoData,
} from '../../components'

import { getCarAction } from '../../store/actions/cars'

import styles from './car-page.module.css'

export const CarPage = (props) => {
    const { match: { params} } = props

    const car = useSelector((state) => state.cars.car)
    const carLoading = useSelector((state) => state.cars.carLoading)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCarAction({ carId: params.id }))
    }, [])

    return (
        <div className={styles.container}>
           {
                carLoading
                ? <Spinner style={{ height: 'calc(100vh - 100px)' }} />
                : car
                ? (
                    <div className={styles.car_info_container}>
                        <p className={styles.car_info}>{car.producer} {car.model} ({car.numberPlate})</p>
                        <p className={styles.car_info}> - {car.user.name}</p>
                    </div>
                )
                : <NoData style={{ height: 'calc(100vh - 100px)' }} /> // empty data
            }
        </div>   
    )
}