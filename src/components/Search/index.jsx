import React from 'react'
import styles from './Search.module.css'

export const Search = (
    {
        filterText,
        inStockOnly,
        onFilterTextChange,
        onInStockOnlyChange
    }
) => {
    return (
        <form className={styles.filterform}>
            <input
                type="text"
                value={filterText}
                placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)}
                className={styles.searchInput}
            />
            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                />
                Only show products in stock
            </label>
        </form>
    )
}
