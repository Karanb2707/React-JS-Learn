
function Tours({tours}) {
    return (
        <div>
            <div>
                <h1>Plan With Love</h1>
            </div>

            <div>
                {
                    tours.map( (tour) => {
                        return <Card {...tour} ></Card>
                    })
                }
            </div>

        </div>
    );
}

export default Tours;