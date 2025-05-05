import './ItemDate.css';

function ItemDate(props) 
{
    let day = props.day;
    let month = props.month;
    let year = props.year;
    
    return (
        <div className="itemDate">
            <span>{day}</span>
            <span> {month}</span>
            <span> {year}</span>
        </div>
    )
}

export default ItemDate;