import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { 
    NavLink, 
    useHistory 
} from 'react-router-dom'

import queryString from 'query-string'

import { getUsersAction } from '../../store/actions/users'
import { getCarsAction } from '../../store/actions/cars'

import { Search } from '../search'

import { colors } from '../../themes'

import styles from './header.module.css'

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
        <div 
            className={styles.container}
            style={{ boxShadow: `1px 4px 10px 0px ${colors.greyLight}` }}
        >
            <NavLink to='/'>
                <p 
                    className={styles.logo}
                    style={{ textShadow: `2px 2px 2px ${colors.grey}` }}
                >
                    Car's Owner
                </p>
            </NavLink>

            <div className={styles.buttons}>
                <NavLink to='/users'>
                    <button 
                        className={styles.button}
                        style={{ backgroundColor: selectedTable === 'users' ? `${colors.mainDark}` : `${colors.main}` }}
                        onClick={() => onClickHederButton('users')}
                    >
                        Users
                    </button>
                </NavLink>
                
                <NavLink to='/cars'>
                    <button  
                        className={styles.button}
                        style={{ backgroundColor: selectedTable === 'cars' ? `${colors.mainDark}` : `${colors.main}` }}
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
                            className={styles.search}
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