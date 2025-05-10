import React, {useState} from 'react';

import './ProductItem.css';
import ProductPriceDate from './ProductPriceDate'

const ProductItem = (props) => {

    const [title, setTitle] = useState(props.title);
    
    // useState function need 2 things:
    // one is used to set default value
    // second is updating function which update

    function clickHandler() {
        setTitle("Added!");
        console.log('Added in Cart!!')
    }

    return(
        <div className = "productItem">
            <ProductPriceDate price={props.price} date={props.date}/>

            <h1 className='prod-title'>{title}</h1>

            <button onClick={clickHandler}>Add to Cart</button>
        </div>
    )
}

export default ProductItem;