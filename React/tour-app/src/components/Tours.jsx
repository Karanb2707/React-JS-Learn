import Card from "./Card";

function Tours({tours, removeTourFun}) {
    return (
        <div>
            <div>
                <h1>Plan With Love</h1>
            </div>

            <div>
                {
                    tours.map( (tour) => {
                        return <Card {...tour} removeTour = {removeTourFun}></Card>
                    })
                }
            </div>

        </div>
    );
}

export default Tours;