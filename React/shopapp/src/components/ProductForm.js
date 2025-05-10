import { useState } from 'react';
import './ProductForm.css';

function ProductFrom() {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function priceChangeHandler(event) {
        setPrice(event.target.value);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);

        console.log([title, price, date])
    }
    
    return(
        <form>
            <div className='prod-label'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}></input>
            </div>
            <div className='prod-label'>
                <label>Price</label>
                <input type='text' onChange={priceChangeHandler}></input>
            </div>
            <div className='prod-label'>
                <label>Mfg Date</label>
                <input type='date' onChange={dateChangeHandler}></input>
            </div>
            <div className='prod-button'>
                <button type='submit'>Add Product</button>
            </div>
        </form>
    )
}

export default ProductFrom;