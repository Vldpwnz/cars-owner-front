import React from 'react'

import styles from './header.module.css'

export const Header = (props) => {
    const {
        selectedTable,
        onClickHederButton,
    } = props

    return (
        <div className={styles.container}>
            <p className={styles.text}>Car's Owner</p>

            <div className={styles.buttons}>
                <button 
                    className={styles.button}
                    style={{ backgroundColor: selectedTable === 'users' ? 'red' : 'grey' }}
                    onClick={() => onClickHederButton('users')}
                >
                    Users
                </button>

                <button  
                    className={styles.button}
                    style={{ backgroundColor: selectedTable === 'cars' ? 'red' : 'grey' }}
                    onClick={() => onClickHederButton('cars')}
                >
                    Cars
                </button>
            </div>
        </div>
    )
}