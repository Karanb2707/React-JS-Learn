import './ProductItem.css';
import ProductPriceDate from './ProductPriceDate'

const ProductItem = (props) => {
    
    const title = props.title;
    const price = props.price;
    const date = props.date;

    return(
        <div className = "productItem">
            <h1>{title}</h1>
            <ProductPriceDate price={price} date={date}></ProductPriceDate>
        </div>
    )
}

export default ProductItem;