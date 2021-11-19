import React from 'react'

import styles from './search.module.css'

export const Search = (props) => {
        const {
            className,
            searchValue,
            setSearchValue,
            onSearch,
        } = props
        
    return (
        <div className={className}>
            <input 
                className={styles.searchField} 
                placeholder="searchBy" 
                onChange={(event) => setSearchValue(event.target.value)}
            />

            <button
                className={styles.button}
                disabled={!searchValue}
                onClick={() => onSearch()}
            >
                Search
            </button>
        </div>
        

    )
}