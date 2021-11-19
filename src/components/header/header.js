import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { 
    NavLink, 
    useHistory 
} from 'react-router-dom'

import queryString from 'query-string'

import { getUserAction, getUsersAction } from '../../store/actions/users'
import { getCarsAction } from '../../store/actions/cars'

import { Search } from '../search'

import styles from './header.module.css'
import { getUserCars } from '../../services/users'

export const Header = (props) => {
    const { location } = props
    
    const dispatch = useDispatch()
    const history = useHistory()
    
    const [selectedTable, setSelectedTable] = useState('users') 
    const [searchValue, setSearchValue] = useState(null)

    const onClickHederButton = (buttonType) => {
        if (buttonType === 'users') {
            setSearchValue(null)
            setSelectedTable('users')

            if (location && location.pathname === '/users') {
                dispatch(getUsersAction())
            }
        } else if (buttonType === 'cars') {
            setSearchValue(null)
            setSelectedTable('cars')

            if (location && location.pathname === '/cars') {
                dispatch(getCarsAction())
            }
        }
    }

    const onSearch = () => {
        const searchParams = queryString.parse(location.search)

        const params = {}

        if (searchParams.sort) {
            params.sort = searchParams.sort
            params.order = searchParams.order

            history.push(`?sort=${searchParams.sort}&order=${searchParams.order}&find=${searchValue}`)
        } else {
            history.push(`?find=${searchValue}`)
        }
        
        params.find = searchValue

        if (location && location.pathname === '/users') {
            dispatch(getUsersAction(params))
        } else if (location && location.pathname === '/cars') {
            dispatch(getCarsAction(params))
        }
    }

    return (
        <div className={styles.container}>
            <NavLink to='/'>
                <p className={styles.text}>Car's Owner</p>
            </NavLink>

            <div className={styles.buttons}>
                <NavLink to='/users'>
                    <button 
                        className={styles.button}
                        style={{ backgroundColor: selectedTable === 'users' ? '#2d669d' : '#d2e8ff' }}
                        onClick={() => onClickHederButton('users')}
                    >
                        Users
                    </button>
                </NavLink>
                
                <NavLink to='/cars'>
                    <button  
                        className={styles.button}
                        style={{ backgroundColor: selectedTable === 'cars' ? '#2d669d' : '#d2e8ff' }}
                        onClick={() => onClickHederButton('cars')}
                    >
                        Cars
                    </button>
                </NavLink>
                
                {
                    location 
                    && (
                        location.pathname === '/users'
                        || location.pathname === '/cars'
                    )
                    && (
                        <Search 
                            className={styles.searchField}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onSearch={onSearch}
                        />
                    )
                }
            </div>
        </div>
    )
}