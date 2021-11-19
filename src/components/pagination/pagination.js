import React from 'react'

import styles from './pagination.module.css'

export const Pagination = (props) => {
    const {
        disabledPrev,
        disabledNext,
        onClickPrev,
        onClickNext,
    } = props
    console.log(disabledNext)
    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                disabled={disabledPrev}
                onClick={() => onClickPrev()}
            >
                Previous
            </button>

            <button
                className={styles.button}
                disabled={disabledNext}
                onClick={() => onClickNext()}
            >
                Next
            </button>
        </div>
    )
}