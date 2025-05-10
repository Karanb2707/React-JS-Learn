import './ProductForm.css';

function ProductFrom() {
    return(
        <form>
            <div className='prod-label'>
                <label>Title</label>
                <input type='text'></input>
            </div>
            <div className='prod-label'>
                <label>Price</label>
                <input type='text'></input>
            </div>
            <div className='prod-label'>
                <label>Mfg Date</label>
                <input type='date' min="2025-05-10" max="2026-05-10"></input>
            </div>
            <div className='prod-button'>
                <button type='submit'>Add Product</button>
            </div>
        </form>
    )
}

export default ProductFrom;