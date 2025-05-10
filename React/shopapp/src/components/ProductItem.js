import './ProductItem.css';
import ProductPriceDate from './ProductPriceDate'

const ProductItem = (props) => {
    
    const title = props.title;
    const price = props.price;
    const date = props.date;

    return(
        <div className = "productItem">
            <ProductPriceDate price={price} date={date}></ProductPriceDate>
            <h1 className='prod-title'>{title}</h1>
            <button>Add to Cart</button>
        </div>
    )
}

export default ProductItem;