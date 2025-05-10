import './ProductPriceDate.css'

const ProductPriceDate = (props) => {
    const price = props.price;
    const date = props.date;

    return (
        <div className='info-box'>
            <h3>Price: {price}/-</h3>
            <p>Mfg: {date}</p>
        </div>
    )
}

export default ProductPriceDate;