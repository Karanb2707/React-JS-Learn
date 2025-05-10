import { useState } from 'react';
import './ProductForm.css';

function ProductFrom() {

    const [newTitle, setTitle] = useState('');
    const [newPrice, setPrice] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function priceChangeHandler(event) {
        setPrice(event.target.value);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const productData = {
            title: newTitle,
            price: newPrice,
            date: newDate
        };

        console.log(productData);

        setTitle('');
        setPrice('');
        setDate('');
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div className='prod-label'>
                <label>Title</label>
                <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='prod-label'>
                <label>Price</label>
                <input type='text' value={newPrice} onChange={priceChangeHandler}></input>
            </div>
            <div className='prod-label'>
                <label>Mfg Date</label>
                <input type='date' value={newDate} min="2025-05-10" max="2026-05-10" onChange={dateChangeHandler}></input>
            </div>
            <div className='prod-button'>
                <button type='submit'>Add Product</button>
            </div>
        </form>
    )
}

export default ProductFrom;