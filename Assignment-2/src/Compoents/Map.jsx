import './Map.css'

const cities = ["Calgary", "London", "Montreal", "Oregon", "Berlin"];

const Map = () => {
    return (
        <div className='map'>
            <ul>
            {
                cities.map((city, index) =>{
                    return(
                        <div key={index}>
                            <li>
                                {city}
                            </li>
                        </div>
                    )
                })
            }
            </ul>
        </div>
      );
};

export default Map;
