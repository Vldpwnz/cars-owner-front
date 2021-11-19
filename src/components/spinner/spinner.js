import React from 'react'

import styles from './spinner.module.css'

export const Spinner = (props) => {
    const {
        className = styles.container,
        style,
    } = props

    return (
        <div
            className={className}
            style={style}
        >
            <div className={styles.spinner} />
        </div>
    )
}