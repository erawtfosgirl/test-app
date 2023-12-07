import React from 'react'
import styles from './ProductItem.module.css'

export const ProductItem = ({ product }) => {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;
    return (
        <tr className={styles.tr}>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}
