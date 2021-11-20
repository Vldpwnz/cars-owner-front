import React from 'react'

import styles from './pagination.module.css'

export const Pagination = (props) => {
    const {
        disabledPrev,
        disabledNext,
        onClickPrev,
        onClickNext,
    } = props
    
    return (
        <div className={styles.container}>
            <button
                className={styles.button_left}
                disabled={disabledPrev}
                onClick={() => onClickPrev()}
            >
                Previous
            </button>

            <button
                className={styles.button_right}
                disabled={disabledNext}
                onClick={() => onClickNext()}
            >
                Next
            </button>
        </div>
    )
}