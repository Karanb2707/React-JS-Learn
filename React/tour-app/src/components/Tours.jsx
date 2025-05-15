import Card from "./Card";

function Tours({tours, removeTourFun}) {
    return (
        <div>
            <div className="text-center font-bold text-3xl p-8">
                <h1>Plan With Love</h1>
            </div>

            <div className="w-[90%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-7 mx-auto mb-[120px]">
                {
                    tours.map( tour => {
                        return <Card key={tour.id} {...tour} removeTour = {removeTourFun}></Card>
                    })
                }   
            </div>

        </div>
    );
}

export default Tours;
