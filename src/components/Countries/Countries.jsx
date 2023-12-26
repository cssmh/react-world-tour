import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("Add this to your visited country");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div className="left">
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
          {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>
      <div className="country-container">
        {countries.map((soloCountry) => (
          <Country
            key={soloCountry.cca3}
            country={soloCountry}
            handleVisitedCountryProps={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;