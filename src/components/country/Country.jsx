import { useState } from "react";
import "./Box.css"
export default function Country({country, handleVisitedCountryProps}){
    console.log(country);
    const {name, continents, population, flags} = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }

    console.log(handleVisitedCountryProps);

    return (
        <div className={`box ${visited ? 'visited' : 'none'}`}>
            <h3 className="name">Name: {name?.common}</h3>
            <p>Continents: {continents}</p>
            <p>Population: {population}</p>
            <img src={flags?.png} alt="" />
            <button onClick={()=> handleVisitedCountryProps(country)} className="margin-down">Mark Visited</button>
            <br />
            <button onClick={handleVisited} className="margin-right">{visited? "Visited" : "Go"}</button>
            {visited? "Congratulations You visit " + name?.common +'.' : "Click to Visit"}
        </div>
    )
}