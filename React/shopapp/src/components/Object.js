import './Object.css'

function Object(props) 
{
    const itemName = props.name;

    return(
        <div>
            <p className="obj">{itemName}</p>
            {props.children}
        </div>
    )
}

export default Object;