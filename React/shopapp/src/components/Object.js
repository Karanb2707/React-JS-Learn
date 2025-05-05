import './Object.css'

function Object(props) 
{
    const itemName = props.name;

    return(
        <p className="obj">{itemName}</p>
    )
}

export default Object;