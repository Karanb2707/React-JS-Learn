import './Products.css'
import ProductItem from './ProductItem'

const Products = (props) => {
    return (
        <div className="products">
            
            <ProductItem 
                title={props.items[0].title} 
                price={props.items[0].price}
                date={props.items[0].date}
            >
            </ProductItem>

            <ProductItem 
                title={props.items[1].title}
            >
            </ProductItem>

            <ProductItem 
                title={props.items[2].title}
            >
            </ProductItem>
        </div>
    )
}

export default Products;