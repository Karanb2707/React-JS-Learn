import './NewProduct.css';
import ProductFrom from './ProductForm';

function NewProduct(props) {

    function parentProduct(product){
        console.log('inside NewProduct.js');
        console.log(product);

        // calling its parent fun
        props.onGrandParent(product);
    }
    return(
        <div className='new-prod'>
            <ProductFrom onParent = {parentProduct}/>
        </div>
    )
}

export default NewProduct; 