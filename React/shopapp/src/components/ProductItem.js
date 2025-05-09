import './ProductItem.css'

const ProductItem = (props) => {
    
    const title = props.title;
    const price = props.price;

    return(
        <div className = "productItem">
            <h1>{title}</h1>
        </div>
    )
}

export default ProductItem;