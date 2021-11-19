import React from 'react'

import styles from './no-data.module.css'

export const NoData = (props) => {
    const {
        text = 'No Data',
        style = {},
    } = props

    return (
        <div 
            className={styles.container}
            style={style}
        >
            <p className={styles.text}>{text}</p>
        </div>
    )
}