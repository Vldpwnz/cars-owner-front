import React from 'react'

import { 
    useDispatch, 
    useSelector, 
} from 'react-redux'

import { useHistory } from 'react-router-dom'

import queryString from 'query-string'

import { getCarsAction } from '../../../../store/actions/cars'
 
import {
    Spinner,
    NoData,
    Pagination
} from '../../../../components'

import { CarsListHeader } from './cars-list-header'
import { CarsListItem } from './cars-list-item'

import styles from './cars-list.module.css'

export const CarsList = (props) => {
    const { 
        cars,
        carsLoading,
        carsPage,
        carsLastPage,
        location,
    } = props

    const carsOrder = useSelector((state) => state.cars.carsOrder)

    const dispatch = useDispatch()
    const history = useHistory()

    const onClickPrev = () => {
        const searchParams = queryString.parse(location.search)

        dispatch(getCarsAction({ ...searchParams, pagination: 'prev' }))
    }

    const onClickNext = () => {
        const searchParams = queryString.parse(location.search)

        dispatch(getCarsAction({ ...searchParams, pagination: 'next' }))
    }

    const onSort = () => {
        const searchParams = queryString.parse(location.search)

        if (searchParams.find) {
            history.push(`?sort=producer&order=${carsOrder === 'asc' ? 'desc' : 'asc'}&find=${searchParams.find}`)

            dispatch(getCarsAction({ sort: 'producer', find: searchParams.find }))
        } else {
            history.push(`?sort=producer&order=${carsOrder === 'asc' ? 'desc' : 'asc'}`)

            dispatch(getCarsAction({ sort: 'producer' }))
        }
    }

    return (
        <div className={styles.container}>
            {
                carsLoading
                ? <Spinner style={{ height: 'calc(100vh - 100px)' }} />
                : cars.length
                ? (
                    <>
                        <CarsListHeader onSort={onSort} />
                        
                        {
                            cars.map((item) => (
                                <CarsListItem
                                    key={item.id}
                                    item={item}
                                />
                            ))
                        }

                        <Pagination 
                            disabledPrev={!carsPage}
                            disabledNext={carsLastPage}
                            onClickPrev={onClickPrev}
                            onClickNext={onClickNext}
                        />
                    </>
                )
                : <NoData style={{ height: 'calc(100vh - 100px)' }} /> // empty data
            }
        </div>
    )
}