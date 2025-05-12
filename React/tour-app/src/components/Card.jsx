import { useState } from "react";

function Card({id, name, info, image, price}, removeTour) {

    const [readMore, setReadMore] = useState(false);
    const description = `${info.substring(0, 200)}....`;

    function readMoreHandler() {
        setReadMore(!readMore);
    }

    return (
        <div className="card">
            
            <img src={image} className="tour-img" />

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h3 className="tour-name">{name}</h3>
                </div>

                <div className="tour-desc">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readMore ? `show less` : `read more`}
                    </span>
                </div>
            </div>
            <button className="tour-btn" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    )
}

export default Card;