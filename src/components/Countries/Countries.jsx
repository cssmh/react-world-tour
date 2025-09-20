import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  // Visited country count + list
  const handleVisitedCountry = (country) => {
    console.log("Add this to your visited country");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  // Visited country count + list ENd

  // Add Flag Here

  const handleAddFlags = (flag) => {
    const newFlags = [...visitedFlags, flag];
    setVisitedFlags(newFlags);
  };
  // Add Flag Here ENd

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* Visited name, Count */}
      <div className="left">
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      {/* Visited name, Count ENd*/}
      {/* Visited flags */}
      <div className="flag-container left">
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag?.flags?.png}></img>
        ))}
      </div>
      {/* Visited flags END*/}
      <div className="country-container">
        {countries.map((soloCountry) => (
          <Country
            key={soloCountry.cca3}
            country={soloCountry}
            handleVisitedCountryProps={handleVisitedCountry}
            handleAddFlags={handleAddFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
