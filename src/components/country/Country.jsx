import "./Box.css"
export default function Country({country}){
    console.log(country);
    const {name, continents, population, flags} = country;
    return (
        <div className="box">
            <h3 className="name">Name: {name?.common}</h3>
            <p>Continents: {continents}</p>
            <p>Population: {population}</p>
            <img src={flags?.png} alt="" />
        </div>
    )
}