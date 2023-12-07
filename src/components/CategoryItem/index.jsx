import React from 'react'
import styles from './CategoryItem.module.css'

export const CategoryItem = ({category}) => {
    return (
        <tr>
            <th className={styles.categoryth} colSpan="2">
                {category}
            </th>
        </tr>
    )
}
