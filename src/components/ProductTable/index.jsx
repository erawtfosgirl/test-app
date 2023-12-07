import React from 'react'
import { CategoryItem } from '../CategoryItem';
import { ProductItem } from '../ProductItem';
import styles from './ProductTable.module.css'

export const ProductTable = ({ products, filterText, inStockOnly }) => {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <CategoryItem
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductItem
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });
    return (
        <table className={styles.productTable}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}
