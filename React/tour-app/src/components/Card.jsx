import { useState } from "react";

function Card({id, name, info, image, price, removeTour}) {

    const [readMore, setReadMore] = useState(false);
    
    const description = readMore ? `${info}... ` : `${info.substring(0, 130)}... `;

    function readMoreHandler() {
        setReadMore(!readMore);
    }

    return (
        <div className="w-full border flex flex-col items-center p-2">
            <img src={image} className="w-[400px] h-[320px] p-1" />

            <div className="w-full flex flex-col items-center">
                <div className="flex items-center space-x-2 p-2">
                    <h4 className="text-xl font-semibold">{price}/-</h4>
                    <h3 className="text-2xl font-bold text-red-900">{name}</h3>
                </div>

                <div className="w-full p-2">
                    {description}
                    <span className="font-semibold text-blue-800 cursor-pointer" onClick={readMoreHandler}>
                        {readMore ? `show less` : `read more`}
                    </span>
                </div>
            </div>
            <button className="border px-4 py-2 m-2 rounded-xl bg-purple-900 text-white cursor-pointer" 
                onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    )
}

export default Card;
