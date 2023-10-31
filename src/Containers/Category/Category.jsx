import React from 'react'
import './Category.css'
import { useParams } from 'react-router-dom'


const Category = () => {
    const { productType } = useParams();
    return (
        <div id='category'>
            <h1>category</h1>
            <h1>category</h1>
            <h1>category3</h1>

            <h1>{productType}</h1>
            <h1>{productType}</h1>
            <h1>{productType}</h1>
            <h1>{productType}</h1>
            <h1>{productType}</h1>
            <h1>{productType}</h1>
            <h1>category33333</h1>
            <h1>category33333</h1>
            <h1>category33333</h1>

        </div>
    )
}

export default Category