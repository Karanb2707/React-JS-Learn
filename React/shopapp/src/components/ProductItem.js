import './ProductItem.css';
import ProductPriceDate from './ProductPriceDate'

const ProductItem = (props) => {
    
    function clickHandler() {
        alert('Added in Cart!!')
    }

    return(
        <div className = "productItem">
            <ProductPriceDate price={props.price} date={props.date}></ProductPriceDate>
            <h1 className='prod-title'>{props.title}</h1>
            <button onClick={clickHandler}>Add to Cart</button>
        </div>
    )
}

export default ProductItem;