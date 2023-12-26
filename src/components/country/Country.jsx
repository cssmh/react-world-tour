import { useState } from "react";
import "./Box.css"
export default function Country({country}){
    console.log(country);
    const {name, continents, population, flags} = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className="box">
            <h3 className="name">Name: {name?.common}</h3>
            <p>Continents: {continents}</p>
            <p>Population: {population}</p>
            <img src={flags?.png} alt="" />
            <button onClick={handleVisited} className="margin-right">{visited? "Visited" : "Go"}</button>
            {visited? "Congratulations You visit " + name?.common +'.' : "Click to Visit"}
        </div>
    )
}